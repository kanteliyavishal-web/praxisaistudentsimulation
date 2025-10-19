// Enhanced Consulting Project Simulator - Working Final Version

// Application State
const AppState = {
    currentUser: null,
    userRole: null,
    onlineUsers: [],
    sessionActive: false,
    sessionStarted: false,
    currentTeam: null,
    currentProblem: null,
    teams: [],
    challenges: [],
    activityLog: [],
    projectPrompt: null,
    assignmentsGenerated: false,
    teamsFormed: false,
    currentDate: new Date(),
    facultyPrompts: []
};

// COMPLETE Application Data with ALL 104 Students
const AppData = {
    students: [
        {"name": "Nirmala Saha", "prn": "20250217060062", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "S Rajeshwari Raj", "prn": "20250217060084", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Mayur Prabhakar patil", "prn": "20250217060065", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sneha Goyal", "prn": "20250217060103", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shubham kumar", "prn": "20250217060099", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rohit Jha", "prn": "20250217060083", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sagar Ghosh", "prn": "20250217060086", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sarvesh Shelke", "prn": "20250217060093", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Disha Parmod Mahadeshwar", "prn": "20250217060112", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Soumya Karar", "prn": "20250217060105", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Abhishek Patel", "prn": "20250217060004", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aditi Singh", "prn": "20250217060005", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shyam Sunder Saha", "prn": "20250217060114", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Anamika Dubey", "prn": "20250217060011", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Siddhant Singh", "prn": "20250217060101", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Abhijay Rathor", "prn": "20250217060002", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Yogesh Parmeshwar Patil", "prn": "20250217060066", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aniket Jain", "prn": "20250217060013", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Podalakuru Harthik", "prn": "20250217060122", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aryan Dharmendra Kumar", "prn": "20250217060017", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Bideepto kumar Mazumdar", "prn": "20250217060022", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Himanshu Gautam", "prn": "20250217060036", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Divya Verma", "prn": "20250217060029", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Mehek Mohapatra", "prn": "20250217060054", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aayush Jain", "prn": "20250217060038", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Avishka Rai", "prn": "20250217060046", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shashank Sharma", "prn": "20250217060091", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Pratik Ranjan", "prn": "20250217060071", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rohan Vilas Raut", "prn": "20250217060078", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rishika Gupta", "prn": "20250217060082", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sakshi Verma", "prn": "20250217060088", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shivanshi Singh", "prn": "20250217060097", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shivansh Pathak", "prn": "20250217060096", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Ushma Borkar", "prn": "20250217060119", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sachin Kumar Singh", "prn": "20250217060085", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sankhanil Patra", "prn": "20250217060089", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Saurav Parkhe", "prn": "20250217060123", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Soma Parvin", "prn": "20250217060104", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aditi Ranjan", "prn": "20250217060006", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Abdul Malik Abdul Waheed", "prn": "20250217060001", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Abhinav Singh", "prn": "20250217060003", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aditya Singh", "prn": "20250217060007", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Manasvi Kondra", "prn": "20250217060052", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "ANUSHKA SINGH", "prn": "20250217060015", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Bhumika Harode", "prn": "20250217060049", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Pranav Ingale", "prn": "20250217060037", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rakshat Agarwal", "prn": "20250217060077", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Samruddhi Naik", "prn": "20250217060059", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Pawar Shrikant Dattatray", "prn": "20250217060067", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Bhure omkar ishwar", "prn": "20250217060021", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Mounisha Chakraborty", "prn": "20250217060056", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Debapriyo Chowdhury", "prn": "20250217060027", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sheikh Azhar", "prn": "20250217060092", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Anusha Kanna", "prn": "20250217060014", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Charu Bansal", "prn": "20250217060024", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "DEVIYANI SHARMA", "prn": "20250217060028", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Garima Singh", "prn": "20250217060030", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Himanshu Chaudhary", "prn": "20250217060025", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Abhijeet Karhe", "prn": "20250217060043", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rohit Singh", "prn": "20250217060045", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Saurav Kumar", "prn": "20250217060090", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Harsh Mishra", "prn": "20250217060033", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Komal Kumari", "prn": "20250217060047", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "MD SHADAB KHAN", "prn": "20250217060053", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Prachi Goenka", "prn": "20250217060069", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Peeyush Chauhan", "prn": "20250217060068", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Siddhi Naik", "prn": "20250217060060", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rishabh Mishra", "prn": "20250217060081", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Mukesh Prajapati", "prn": "20250217060118", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Ganesh Pannalal Suryawanshi", "prn": "20250217060106", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shruti Smita Naik", "prn": "20250217060098", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rahul Maharaj", "prn": "20250217060075", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shikha", "prn": "20250217060094", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Varsha S", "prn": "20250217060109", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Alpana Singh", "prn": "20250217060120", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "SK Siddik Alam", "prn": "20250217060102", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Utkarsh Raghuvanshi", "prn": "20250217060108", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Kanishk Maheshwari", "prn": "20250217060042", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Aman Sagar", "prn": "20250217060009", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Harsh Kumar", "prn": "20250217060032", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Harshit Garg", "prn": "20250217060034", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Vishalkumar Rajgarhia", "prn": "20250217060076", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Manasee Choudhary", "prn": "20250217060051", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Ashmita Jain", "prn": "20250217060018", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Nitesh Pareek", "prn": "20250217060063", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Jaskirat kaur", "prn": "20250217060039", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Yash Anil Joshi", "prn": "20250217060041", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Angesh Kumar", "prn": "20250217060012", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Chinki Vadhwani", "prn": "20250217060057", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Nikhil Chandrakar", "prn": "20250217060061", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shivani Ramakant Alat", "prn": "20250217060095", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sumeet Joshi", "prn": "20250217060040", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rijit Guha", "prn": "20250217060080", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Mohd. Kaif faruqui", "prn": "20250217060055", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Rachana Gowda R.V", "prn": "20250217060074", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Divyashree K R", "prn": "20250217060111", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Pratik Singh", "prn": "20250217060072", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Urmila Chandrakant Gurav", "prn": "20250217060115", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Muskan", "prn": "20250217060058", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Sahil Sinha", "prn": "20250217060087", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Pushkar Arjun Binawat", "prn": "20250217060124", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Shubhi Abrol", "prn": "20250217060100", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Prajapati Meet Madanlal", "prn": "20250217060125", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null},
        {"name": "Chavan Hrishikesh Mahesh Dhanashree", "prn": "20250217060126", "performance": {"analytical": 0, "creativity": 0, "communication": 0}, "active": true, "online": false, "loginTime": null}
    ],
    
    faculty: {
        name: "Deepak Gupta",
        username: "Deepak Gupta",
        password: "DG_123"
    },
    
    problemStatements: [
        {
            id: 1,
            client: "TechStart Solutions",
            industry: "SaaS Technology", 
            problem: "Customer Acquisition Crisis",
            scenario: "You've just been hired by TechStart Solutions, a 2-year-old B2B SaaS company facing a critical crisis. Monthly churn: 15%, CAC: $2,500, LTV: $800. The CEO needs a turnaround plan within 30 days as the lead investor is threatening to pull out.",
            deliverables: ["Root Cause Analysis", "Customer Acquisition Strategy", "Retention Plan", "Financial Projections", "30-60-90 Day Action Plan"],
            keyMetrics: ["CAC", "LTV", "Churn Rate", "NPS", "MRR Growth"]
        },
        {
            id: 2,
            client: "MedCare Hospital Systems",
            industry: "Healthcare",
            problem: "Operational Efficiency Crisis",
            scenario: "MedCare operates 12 hospitals with operational costs up 40% in 18 months. Patient wait times: 4.5 hours, satisfaction: 2.1/5. State health department threatening accreditation revocation within 60 days.",
            deliverables: ["Operational Assessment", "Process Redesign Plan", "Technology Integration", "Staff Optimization", "Cost Reduction Roadmap"],
            keyMetrics: ["Patient Wait Time", "Cost per Patient", "Patient Satisfaction", "Staff Retention"]
        },
        {
            id: 3,
            client: "RetailMax Fashion",
            industry: "Retail & E-commerce",
            problem: "Digital Transformation Imperative", 
            scenario: "RetailMax Fashion revenue down 30% in 24 months. Online sales only 8% (industry avg: 35%), 47 store closures announced. Must transform digitally or face extinction.",
            deliverables: ["Digital Strategy Roadmap", "E-commerce Platform Redesign", "Omnichannel Integration", "Social Media Strategy"],
            keyMetrics: ["Online Revenue %", "Digital Engagement", "Customer Acquisition Cost", "Brand Sentiment"]
        },
        {
            id: 4,
            client: "GreenEnergy Dynamics", 
            industry: "Renewable Energy",
            problem: "Market Expansion Challenge",
            scenario: "GreenEnergy is #3 in US solar market with $450M revenue. Wants to expand into wind/battery storage but competitor planning $500M acquisition spree. Board gave 90 days for expansion strategy.",
            deliverables: ["Market Analysis", "Competitive Intelligence", "Build vs Buy Analysis", "Investment Strategy", "Go-to-Market Plan"],
            keyMetrics: ["Market Share Growth", "Revenue Diversification", "ROI Projections"]
        }
    ],
    
    aiResponses: {
        research: [
            "For market research, I'd suggest starting with Porter's Five Forces analysis. Would you like me to guide you through analyzing your industry's competitive landscape?",
            "Consider primary research through surveys and secondary research via industry reports. What specific market data are you trying to gather?"
        ],
        analysis: [
            "For financial analysis, focus on key metrics like ROI, NPV, and payback period. What specific financial challenge are you analyzing?",
            "Consider using the BCG Growth-Share Matrix to analyze your client's product portfolio."
        ],
        strategy: [
            "Strategic options should be evaluated against feasibility, impact, and resource requirements. Have you identified your key constraints?",
            "Consider Ansoff's Matrix for growth strategies - Market Penetration, Development, Product Development, or Diversification."
        ]
    }
};

// Utility Functions
const Utils = {
    getInitials: (name) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('').substring(0, 2);
    },
    
    formatTime: (date) => {
        if (!date) return 'Never';
        const d = new Date(date);
        return d.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    },
    
    generateTeamName: () => {
        const prefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Sigma', 'Omega'];
        const suffixes = ['Team', 'Group', 'Squad', 'Unit'];
        return prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + 
               suffixes[Math.floor(Math.random() * suffixes.length)];
    },
    
    logActivity: (activity) => {
        const timestamp = new Date();
        const logEntry = {
            time: Utils.formatTime(timestamp),
            activity: activity,
            user: AppState.currentUser?.name || 'System',
            timestamp: timestamp
        };
        
        AppState.activityLog.unshift(logEntry);
        
        if (AppState.activityLog.length > 50) {
            AppState.activityLog = AppState.activityLog.slice(0, 50);
        }
        
        RealTimeSync.saveState();
    }
};

// Real-Time Sync
const RealTimeSync = {
    saveState: () => {
        const stateToSave = {
            onlineUsers: AppState.onlineUsers,
            sessionActive: AppState.sessionActive,
            sessionStarted: AppState.sessionStarted,
            teams: AppState.teams,
            activityLog: AppState.activityLog,
            projectPrompt: AppState.projectPrompt,
            assignmentsGenerated: AppState.assignmentsGenerated,
            teamsFormed: AppState.teamsFormed,
            studentsData: AppData.students,
            facultyPrompts: AppState.facultyPrompts,
            lastUpdate: Date.now()
        };
        localStorage.setItem('consultingSimulatorState', JSON.stringify(stateToSave));
        window.dispatchEvent(new CustomEvent('stateUpdated', { detail: stateToSave }));
    },
    
    loadState: () => {
        const savedState = localStorage.getItem('consultingSimulatorState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            AppState.onlineUsers = parsedState.onlineUsers || [];
            AppState.sessionActive = parsedState.sessionActive || false;
            AppState.sessionStarted = parsedState.sessionStarted || false;
            AppState.teams = parsedState.teams || [];
            AppState.activityLog = parsedState.activityLog || [];
            AppState.projectPrompt = parsedState.projectPrompt || null;
            AppState.assignmentsGenerated = parsedState.assignmentsGenerated || false;
            AppState.teamsFormed = parsedState.teamsFormed || false;
            AppState.facultyPrompts = parsedState.facultyPrompts || [];
            
            if (parsedState.studentsData) {
                parsedState.studentsData.forEach(syncStudent => {
                    const localStudent = AppData.students.find(s => s.prn === syncStudent.prn);
                    if (localStudent) {
                        localStudent.online = syncStudent.online;
                        localStudent.loginTime = syncStudent.loginTime;
                    }
                });
            }
            return true;
        }
        return false;
    },
    
    startListener: () => {
        window.addEventListener('storage', (e) => {
            if (e.key === 'consultingSimulatorState') {
                RealTimeSync.loadState();
                updateAllUI();
                checkForFacultyPrompts();
            }
        });
        
        window.addEventListener('stateUpdated', (e) => {
            updateAllUI();
            checkForFacultyPrompts();
        });
    }
};

// Authentication Module
const Auth = {
    login: (username, password) => {
        console.log('Login attempt:', username, password);
        
        if (username === AppData.faculty.username && password === AppData.faculty.password) {
            AppState.currentUser = AppData.faculty;
            AppState.userRole = 'faculty';
            Utils.logActivity('Faculty logged in');
            return { success: true, role: 'faculty' };
        }
        
        const student = AppData.students.find(s => 
            s.name === username && s.prn === password && s.active
        );
        
        if (student) {
            AppState.currentUser = student;
            AppState.userRole = 'student';
            student.online = true;
            student.loginTime = new Date();
            
            if (!AppState.onlineUsers.find(u => u.name === student.name)) {
                AppState.onlineUsers.push({...student});
            }
            
            RealTimeSync.saveState();
            Utils.logActivity(`${student.name} joined the session`);
            return { success: true, role: 'student' };
        }
        
        return { success: false, message: 'Invalid credentials' };
    },
    
    logout: () => {
        if (AppState.currentUser && AppState.userRole === 'student') {
            const student = AppState.currentUser;
            student.online = false;
            
            const mainStudent = AppData.students.find(s => s.name === student.name);
            if (mainStudent) {
                mainStudent.online = false;
            }
            
            AppState.onlineUsers = AppState.onlineUsers.filter(u => u.name !== student.name);
            RealTimeSync.saveState();
            Utils.logActivity(`${student.name} left the session`);
        }
        
        AppState.currentUser = null;
        AppState.userRole = null;
        AppState.currentTeam = null;
        AppState.currentProblem = null;
    }
};

// Team Management Module
const TeamManager = {
    formTeams: (teamSize = 5) => {
        const onlineStudents = [...AppState.onlineUsers];
        const teams = [];
        
        const shuffled = onlineStudents.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < shuffled.length; i += teamSize) {
            const teamMembers = shuffled.slice(i, i + teamSize);
            const team = {
                id: teams.length + 1,
                name: Utils.generateTeamName(),
                members: teamMembers,
                captain: teamMembers[Math.floor(Math.random() * teamMembers.length)],
                problem: null,
                progress: 0,
                deliverables: []
            };
            teams.push(team);
        }
        
        return teams;
    }
};

// AI Assistant Module
const AIAssistant = {
    processQuery: (query) => {
        const lowerQuery = query.toLowerCase();
        
        let category = 'research';
        if (lowerQuery.includes('analysis') || lowerQuery.includes('financial')) {
            category = 'analysis';
        } else if (lowerQuery.includes('strategy') || lowerQuery.includes('recommendation')) {
            category = 'strategy';
        }
        
        const responses = AppData.aiResponses[category];
        const response = responses[Math.floor(Math.random() * responses.length)];
        
        Utils.logActivity('Consulted AI assistant');
        return response;
    },
    
    getFrameworkSuggestion: (type) => {
        const frameworks = {
            'market-research': "For market research, I recommend starting with Porter's Five Forces and SWOT analysis. Consider primary research through customer interviews.",
            'competitive-analysis': "Use competitive positioning maps and the BCG Growth-Share Matrix. Analyze competitors' strengths and market positioning.",
            'frameworks': "Popular frameworks include Porter's Five Forces, SWOT Analysis, McKinsey 7S, and Ansoff Matrix. Which challenge are you addressing?"
        };
        
        return frameworks[type] || frameworks['frameworks'];
    }
};

// Faculty Prompt System
const FacultyPromptSystem = {
    sendPrompt: (prompt) => {
        const promptMessage = {
            id: Date.now(),
            message: prompt,
            timestamp: new Date(),
            type: 'urgent_challenge'
        };
        
        AppState.facultyPrompts.push(promptMessage);
        RealTimeSync.saveState();
        
        Utils.logActivity(`Faculty sent urgent prompt: "${prompt}"`);
        alert(`Urgent challenge sent to all students: "${prompt}"`);
    }
};

// Check for faculty prompts
function checkForFacultyPrompts() {
    if (AppState.userRole !== 'student') return;
    
    const unreadPrompts = AppState.facultyPrompts.filter(prompt => {
        const promptId = `prompt_${prompt.id}`;
        return !localStorage.getItem(promptId);
    });
    
    unreadPrompts.forEach(prompt => {
        showFacultyPrompt(prompt);
        localStorage.setItem(`prompt_${prompt.id}`, 'seen');
    });
}

function showFacultyPrompt(prompt) {
    const challengePopup = document.getElementById('challengePopup');
    const challengeContent = document.getElementById('challengeContent');
    
    if (challengePopup && challengeContent) {
        challengeContent.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <strong style="color: #dc2626;">URGENT FROM FACULTY:</strong>
            </div>
            <div style="font-size: 1rem; line-height: 1.6;">
                ${prompt.message}
            </div>
        `;
        
        challengePopup.classList.remove('hidden');
        
        setTimeout(() => {
            challengePopup.classList.add('hidden');
        }, 30000);
        
        Utils.logActivity('Received urgent faculty prompt');
    }
}

// UI Update Functions
function updateOnlineUsers() {
    const onlineUsersList = document.getElementById('onlineUsersList');
    const onlineCount = document.getElementById('onlineCount');
    
    if (!onlineUsersList || !onlineCount) return;
    
    onlineCount.textContent = AppState.onlineUsers.length;
    
    if (AppState.onlineUsers.length === 0) {
        onlineUsersList.innerHTML = '<div class="empty-state">No students online yet</div>';
        return;
    }
    
    onlineUsersList.innerHTML = AppState.onlineUsers.map(user => `
        <div class="user-card">
            <div class="user-avatar">${Utils.getInitials(user.name)}</div>
            <div class="user-details">
                <div class="user-name">${user.name}</div>
                <div class="user-status">
                    <span class="status-indicator"></span>
                    Online since ${Utils.formatTime(user.loginTime)}
                </div>
            </div>
        </div>
    `).join('');
}

function updateDashboard() {
    if (AppState.userRole !== 'student' || !AppState.currentUser) return;
    
    const dashboardUser = document.getElementById('dashboardUser');
    if (dashboardUser) {
        dashboardUser.textContent = AppState.currentUser.name;
    }
    
    // Update current date display
    const currentDateElement = document.querySelector('.current-day');
    if (currentDateElement) {
        const today = new Date();
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        currentDateElement.textContent = dayNames[today.getDay()];
    }
    
    const totalDaysElement = document.querySelector('.total-days');
    if (totalDaysElement) {
        const today = new Date();
        totalDaysElement.textContent = `${today.getDate()}/${today.getMonth() + 1}`;
    }
    
    if (AppState.assignmentsGenerated && AppState.sessionStarted) {
        const userTeam = AppState.teams.find(team => 
            team.members.some(member => member.name === AppState.currentUser.name)
        );
        
        if (userTeam && userTeam.problem) {
            // Update project info
            const elements = {
                'clientName': userTeam.problem.client,
                'projectType': userTeam.problem.problem,
                'projectClient': userTeam.problem.client,
                'projectIndustry': userTeam.problem.industry,
                'projectChallenge': userTeam.problem.problem,
                'projectDescription': userTeam.problem.scenario,
                'taskTitle': `Initial ${userTeam.problem.deliverables[0]}`,
                'taskDescription': `Begin your analysis of ${userTeam.problem.client}'s ${userTeam.problem.problem.toLowerCase()}. Focus on understanding the key challenges and developing a structured approach.`
            };
            
            Object.entries(elements).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value;
            });
            
            // Update task priority
            const taskPriority = document.querySelector('.task-priority');
            if (taskPriority) {
                taskPriority.className = 'task-priority high';
                taskPriority.textContent = 'HIGH PRIORITY';
            }
            
            // Update deliverables
            const taskDeliverables = document.getElementById('taskDeliverables');
            if (taskDeliverables && userTeam.problem.deliverables) {
                taskDeliverables.innerHTML = userTeam.problem.deliverables
                    .map(deliverable => `<li>${deliverable}</li>`)
                    .join('');
            }
            
            // Update performance metrics to show actual scores
            updatePerformanceMetrics(true);
        }
    } else {
        // Show waiting state
        updatePerformanceMetrics(false);
    }
}

function updatePerformanceMetrics(hasAssignment) {
    const performanceMetrics = document.querySelector('.performance-metrics .widget-content');
    
    if (!performanceMetrics) return;
    
    if (hasAssignment) {
        performanceMetrics.innerHTML = `
            <div class="metric-item">
                <div class="metric-label">Analytical Rigor</div>
                <div class="metric-score">
                    <span class="score">7.2</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 72%"></div>
                    </div>
                </div>
            </div>
            <div class="metric-item">
                <div class="metric-label">Strategic Thinking</div>
                <div class="metric-score">
                    <span class="score">6.8</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 68%"></div>
                    </div>
                </div>
            </div>
            <div class="metric-item">
                <div class="metric-label">Communication</div>
                <div class="metric-score">
                    <span class="score">8.1</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 81%"></div>
                    </div>
                </div>
            </div>
            <div class="performance-feedback">
                <h5>Latest Feedback:</h5>
                <p>"Good initial analysis. Focus more on data-driven insights."</p>
            </div>
        `;
    } else {
        performanceMetrics.innerHTML = `
            <div class="metric-item">
                <div class="metric-label">Analytical Rigor</div>
                <div class="metric-score">
                    <span class="score">--</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            <div class="metric-item">
                <div class="metric-label">Strategic Thinking</div>
                <div class="metric-score">
                    <span class="score">--</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            <div class="metric-item">
                <div class="metric-label">Communication</div>
                <div class="metric-score">
                    <span class="score">--</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            <div class="performance-feedback">
                <h5>Latest Feedback:</h5>
                <p>"Performance tracking will begin once project assignment is complete."</p>
            </div>
        `;
    }
}

function updateAdminPanel() {
    if (AppState.userRole !== 'faculty') return;
    
    const totalStudents = document.getElementById('totalStudents');
    const onlineStudents = document.getElementById('onlineStudents');
    const activeTeams = document.getElementById('activeTeams');
    
    if (totalStudents) totalStudents.textContent = AppData.students.length;
    if (onlineStudents) onlineStudents.textContent = AppState.onlineUsers.length;
    if (activeTeams) activeTeams.textContent = AppState.teams.length;
    
    updateStudentTable();
    
    const formTeamsBtn = document.getElementById('formTeams');
    if (formTeamsBtn) {
        if (AppState.onlineUsers.length > 0 && !AppState.teamsFormed) {
            formTeamsBtn.style.display = 'inline-flex';
        } else {
            formTeamsBtn.style.display = 'none';
        }
    }
}

function updateStudentTable() {
    const studentTableBody = document.getElementById('studentTableBody');
    if (!studentTableBody) return;
    
    const searchTerm = document.getElementById('studentSearch')?.value.toLowerCase() || '';
    const filteredStudents = AppData.students.filter(student => 
        student.name.toLowerCase().includes(searchTerm) ||
        student.prn.toLowerCase().includes(searchTerm)
    );
    
    studentTableBody.innerHTML = filteredStudents.map(student => {
        let teamName = 'Not Assigned';
        const studentTeam = AppState.teams.find(team => 
            team.members.some(member => member.name === student.name)
        );
        if (studentTeam) {
            teamName = studentTeam.name;
        }
        
        return `
            <tr>
                <td>${student.name}</td>
                <td>${student.prn}</td>
                <td>
                    <span class="status-badge ${student.online ? 'online' : 'offline'}">
                        ${student.online ? 'ONLINE' : 'OFFLINE'}
                    </span>
                </td>
                <td>${teamName}</td>
                <td>A: ${student.performance.analytical}/10 | C: ${student.performance.creativity}/10 | M: ${student.performance.communication}/10</td>
                <td>${Utils.formatTime(student.loginTime)}</td>
                <td>
                    <button class="btn btn--secondary btn--sm" onclick="editStudent('${student.prn}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateAllUI() {
    if (AppState.userRole === 'faculty') {
        updateAdminPanel();
    } else if (AppState.userRole === 'student') {
        updateOnlineUsers();
        updateDashboard();
    }
}

// Navigation Functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function handleSuccessfulLogin(role) {
    if (role === 'faculty') {
        showPage('adminPage');
        updateAdminPanel();
    } else {
        if (AppState.sessionStarted) {
            showPage('dashboardPage');
            updateDashboard();
        } else {
            showPage('lobbyPage');
            updateOnlineUsers();
        }
    }
}

// Event Handlers
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('loginError');
    
    if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password';
        errorDiv.classList.remove('hidden');
        return;
    }
    
    const result = Auth.login(username, password);
    
    if (result.success) {
        errorDiv.classList.add('hidden');
        handleSuccessfulLogin(result.role);
    } else {
        errorDiv.textContent = result.message;
        errorDiv.classList.remove('hidden');
    }
}

function handleLogout() {
    Auth.logout();
    showPage('loginPage');
    
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').classList.add('hidden');
}

function handleStartSession() {
    if (AppState.onlineUsers.length === 0) {
        alert('No students are currently online.');
        return;
    }
    
    AppState.sessionActive = true;
    AppState.sessionStarted = true;
    
    RealTimeSync.saveState();
    Utils.logActivity('Session started by faculty');
    
    document.getElementById('startSession').disabled = true;
    document.getElementById('pauseSession').disabled = false;
    document.getElementById('endSession').disabled = false;
    
    alert('Session started!');
}

function handleFormTeams() {
    if (AppState.onlineUsers.length === 0) {
        alert('No students are currently online.');
        return;
    }
    
    AppState.teams = TeamManager.formTeams(5);
    AppState.teamsFormed = true;
    
    RealTimeSync.saveState();
    Utils.logActivity(`Formed ${AppState.teams.length} teams`);
    alert(`Successfully formed ${AppState.teams.length} teams!`);
    
    updateAdminPanel();
}

function handleGenerateAssignments() {
    const prompt = document.getElementById('projectPrompt').value.trim();
    
    if (!prompt) {
        alert('Please enter a project prompt first.');
        return;
    }
    
    if (AppState.teams.length === 0) {
        alert('Please form teams first.');
        return;
    }
    
    AppState.teams.forEach((team, index) => {
        team.problem = AppData.problemStatements[index % AppData.problemStatements.length];
    });
    
    AppState.projectPrompt = prompt;
    AppState.assignmentsGenerated = true;
    
    RealTimeSync.saveState();
    Utils.logActivity(`Generated assignments for ${AppState.teams.length} teams`);
    alert('Team assignments generated successfully!');
    
    updateAllUI();
}

function handleSendFacultyPrompt() {
    const prompt = document.getElementById('projectPrompt').value.trim();
    
    if (!prompt) {
        alert('Please enter a prompt message first.');
        return;
    }
    
    if (AppState.onlineUsers.length === 0) {
        alert('No students are currently online.');
        return;
    }
    
    FacultyPromptSystem.sendPrompt(prompt);
    document.getElementById('projectPrompt').value = '';
}

function handleAIQuery() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    
    if (!input || !chat || !input.value.trim()) return;
    
    const query = input.value.trim();
    
    const userMessage = document.createElement('div');
    userMessage.className = 'ai-message user-message';
    userMessage.innerHTML = `
        <div class="ai-text">${query}</div>
        <div class="ai-avatar"><i class="fas fa-user"></i></div>
    `;
    chat.appendChild(userMessage);
    
    setTimeout(() => {
        const response = AIAssistant.processQuery(query);
        
        const aiMessage = document.createElement('div');
        aiMessage.className = 'ai-message';
        aiMessage.innerHTML = `
            <div class="ai-avatar"><i class="fas fa-robot"></i></div>
            <div class="ai-text">${response}</div>
        `;
        chat.appendChild(aiMessage);
        
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
    
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
}

function handleAISuggestion(suggestion) {
    const chat = document.getElementById('aiChat');
    if (!chat) return;
    
    const response = AIAssistant.getFrameworkSuggestion(suggestion);
    
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    aiMessage.innerHTML = `
        <div class="ai-avatar"><i class="fas fa-robot"></i></div>
        <div class="ai-text">${response}</div>
    `;
    chat.appendChild(aiMessage);
    
    chat.scrollTop = chat.scrollHeight;
}

function editStudent(prn) {
    const student = AppData.students.find(s => s.prn === prn);
    if (student) {
        const modal = document.createElement('div');
        modal.className = 'popup-overlay';
        modal.innerHTML = `
            <div class="popup-content">
                <div class="popup-header">
                    <h3><i class="fas fa-user-edit"></i> Edit Student</h3>
                    <button class="popup-close" onclick="closeEditModal()"><i class="fas fa-times"></i></button>
                </div>
                <div class="popup-body">
                    <div class="form-group">
                        <label>Student Name</label>
                        <input type="text" id="editStudentName" value="${student.name}" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>PRN (Password)</label>
                        <input type="text" id="editStudentPRN" value="${student.prn}" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <select id="editStudentStatus" class="form-control">
                            <option value="true" ${student.active ? 'selected' : ''}>Active</option>
                            <option value="false" ${!student.active ? 'selected' : ''}>Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="popup-footer">
                    <button class="btn btn--primary" onclick="saveStudentChanges('${prn}')">Save</button>
                    <button class="btn btn--secondary" onclick="closeEditModal()">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        window.currentEditModal = modal;
    }
}

function closeEditModal() {
    if (window.currentEditModal) {
        document.body.removeChild(window.currentEditModal);
        window.currentEditModal = null;
    }
}

function saveStudentChanges(oldPRN) {
    const newName = document.getElementById('editStudentName').value.trim();
    const newPRN = document.getElementById('editStudentPRN').value.trim();
    const newStatus = document.getElementById('editStudentStatus').value === 'true';
    
    if (!newName || !newPRN) {
        alert('Name and PRN are required.');
        return;
    }
    
    const student = AppData.students.find(s => s.prn === oldPRN);
    if (student) {
        student.name = newName;
        student.prn = newPRN;
        student.active = newStatus;
        
        RealTimeSync.saveState();
        Utils.logActivity(`Updated student: ${newName}`);
        updateStudentTable();
        closeEditModal();
        alert('Student updated successfully!');
    }
}

// Initialize Application
function initializeApp() {
    console.log('Initializing app...');
    RealTimeSync.loadState();
    RealTimeSync.startListener();
    
    // Add event listeners
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout buttons
    const logoutBtns = ['logoutBtn', 'dashboardLogout', 'adminLogout'];
    logoutBtns.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) btn.addEventListener('click', handleLogout);
    });
    
    // AI Assistant
    const aiSend = document.getElementById('aiSend');
    if (aiSend) aiSend.addEventListener('click', handleAIQuery);
    
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleAIQuery();
        });
    }
    
    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleAISuggestion(e.target.dataset.suggestion);
        });
    });
    
    // Admin controls
    const startSession = document.getElementById('startSession');
    if (startSession) startSession.addEventListener('click', handleStartSession);
    
    const formTeams = document.getElementById('formTeams');
    if (formTeams) formTeams.addEventListener('click', handleFormTeams);
    
    const generateAssignments = document.getElementById('generateAssignments');
    if (generateAssignments) generateAssignments.addEventListener('click', handleGenerateAssignments);
    
    // Student search
    const studentSearch = document.getElementById('studentSearch');
    if (studentSearch) studentSearch.addEventListener('input', updateStudentTable);
    
    // Challenge popup close
    const closeChallengePopup = document.getElementById('closeChallengePopup');
    if (closeChallengePopup) {
        closeChallengePopup.addEventListener('click', () => {
            document.getElementById('challengePopup').classList.add('hidden');
        });
    }
    
    // Periodic updates
    setInterval(updateAllUI, 3000);
    setInterval(checkForFacultyPrompts, 2000);
    
    Utils.logActivity('Application initialized');
    console.log('App initialized successfully!');
}

// Global functions
window.editStudent = editStudent;
window.closeEditModal = closeEditModal;
window.saveStudentChanges = saveStudentChanges;
window.handleSendFacultyPrompt = handleSendFacultyPrompt;

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export for debugging
window.ConsultingSimulator = {
    AppState,
    AppData,
    Auth,
    TeamManager,
    AIAssistant,
    Utils,
    RealTimeSync,
    FacultyPromptSystem
};