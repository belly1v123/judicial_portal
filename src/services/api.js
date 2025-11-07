import casesData from '../data/cases.json';
import judgmentsData from '../data/judgments.json';
import notificationsData from '../data/notifications.json';
import announcementsData from '../data/announcements.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const caseService = {
    // Get all cases
    getAllCases: async () => {
        await delay(500);
        return casesData;
    },

    // Get case by ID
    getCaseById: async (caseId) => {
        await delay(300);
        return casesData.find(c => c.id === caseId);
    },

    // Search cases
    searchCases: async (query) => {
        await delay(400);
        const searchTerm = query.toLowerCase();
        return casesData.filter(c =>
            c.id.toLowerCase().includes(searchTerm) ||
            c.complainant.toLowerCase().includes(searchTerm) ||
            c.respondent.toLowerCase().includes(searchTerm) ||
            c.caseType.toLowerCase().includes(searchTerm)
        );
    },

    // File a new case
    fileCase: async (caseData) => {
        await delay(800);
        const newCase = {
            id: `CASE-2025-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
            ...caseData,
            status: 'Under Review',
            filedDate: new Date().toISOString().split('T')[0],
            nextHearing: null,
            timeline: [
                {
                    date: new Date().toISOString().split('T')[0],
                    event: 'Case filed',
                    description: 'Case registered in the system'
                }
            ]
        };
        return { success: true, case: newCase };
    },

    // Get user's cases (mock filter by user)
    getUserCases: async (userId) => {
        await delay(500);
        // In a real app, this would filter by userId
        return casesData.slice(0, 2); // Return first 2 as user's cases
    }
};

export const judgmentService = {
    // Get all judgments
    getAllJudgments: async () => {
        await delay(500);
        return judgmentsData;
    },

    // Search judgments
    searchJudgments: async (query) => {
        await delay(400);
        const searchTerm = query.toLowerCase();
        return judgmentsData.filter(j =>
            j.title.toLowerCase().includes(searchTerm) ||
            j.caseNumber.toLowerCase().includes(searchTerm) ||
            j.category.toLowerCase().includes(searchTerm) ||
            j.keywords.some(k => k.toLowerCase().includes(searchTerm))
        );
    },

    // Get judgment by ID
    getJudgmentById: async (judgmentId) => {
        await delay(300);
        return judgmentsData.find(j => j.id === judgmentId);
    }
};

export const notificationService = {
    // Get all notifications
    getNotifications: async () => {
        await delay(300);
        return notificationsData;
    },

    // Mark notification as read
    markAsRead: async (notificationId) => {
        await delay(200);
        return { success: true };
    }
};

export const announcementService = {
    // Get all announcements
    getAnnouncements: async () => {
        await delay(300);
        return announcementsData;
    },

    // Get latest announcements
    getLatestAnnouncements: async (limit = 3) => {
        await delay(300);
        return announcementsData.slice(0, limit);
    }
};
