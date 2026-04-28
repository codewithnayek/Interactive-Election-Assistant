const electionData = {
    timeline: [
        {
            title: "Notification of Election",
            description: "The Election Commission of India (ECI) announces the schedule for the elections, bringing the Model Code of Conduct into immediate effect.",
            icon: "fa-bullhorn"
        },
        {
            title: "Filing of Nominations",
            description: "Candidates submit their nomination papers to the Returning Officer. They must declare their assets, criminal records, and educational qualifications.",
            icon: "fa-file-signature"
        },
        {
            title: "Scrutiny of Nominations",
            description: "The Returning Officer examines the nomination papers to ensure they meet all legal requirements. Invalid nominations are rejected.",
            icon: "fa-magnifying-glass"
        },
        {
            title: "Withdrawal of Candidature",
            description: "Candidates are given a few days to withdraw their nomination if they choose not to contest.",
            icon: "fa-hand"
        },
        {
            title: "Campaigning",
            description: "Candidates and political parties campaign to win voter support. Campaigning strictly ends 48 hours before polling begins.",
            icon: "fa-microphone"
        },
        {
            title: "Polling Day",
            description: "Voters cast their votes using Electronic Voting Machines (EVMs) and VVPATs at designated polling booths.",
            icon: "fa-check-to-slot"
        },
        {
            title: "Counting of Votes",
            description: "EVMs are opened and votes are counted under the supervision of the Returning Officer and candidate observers.",
            icon: "fa-calculator"
        },
        {
            title: "Declaration of Results",
            description: "The candidate with the highest number of valid votes in a constituency is declared the winner.",
            icon: "fa-trophy"
        }
    ],
    flashcards: [
        {
            term: "ECI",
            definition: "Election Commission of India. An autonomous constitutional authority responsible for administering election processes in India."
        },
        {
            term: "EVM",
            definition: "Electronic Voting Machine. Used in Indian elections to record votes electronically instead of using ballot papers."
        },
        {
            term: "VVPAT",
            definition: "Voter Verifiable Paper Audit Trail. Provides feedback to voters using a slip of paper to verify their vote was cast correctly."
        },
        {
            term: "Model Code of Conduct",
            definition: "A set of guidelines issued by the ECI regulating political parties and candidates prior to elections."
        },
        {
            term: "NOTA",
            definition: "None Of The Above. A ballot option allowing voters to indicate disapproval of all candidates in a voting system."
        },
        {
            term: "Lok Sabha",
            definition: "The lower house of India's bicameral Parliament. Members are elected by universal adult suffrage."
        },
        {
            term: "Rajya Sabha",
            definition: "The upper house of the Parliament of India. Members are elected by the elected members of State Legislative Assemblies."
        },
        {
            term: "Vidhan Sabha",
            definition: "The State Legislative Assembly. The lower house of the state legislature in India."
        }
    ],
    quiz: [
        {
            question: "Who is responsible for conducting elections to the Lok Sabha and State Legislative Assemblies?",
            options: ["President of India", "Parliament", "Election Commission of India", "Supreme Court"],
            answer: 2
        },
        {
            question: "What is the minimum voting age in India?",
            options: ["16 Years", "18 Years", "21 Years", "25 Years"],
            answer: 1
        },
        {
            question: "What does VVPAT stand for?",
            options: [
                "Voter Verifiable Paper Audit Trail",
                "Voting Verification Process and Tracking",
                "Voter Validation Paper Account Trail",
                "Verified Voting Process Audit Trail"
            ],
            answer: 0
        },
        {
            question: "When does the Model Code of Conduct come into effect?",
            options: [
                "1 month before polling",
                "Immediately after the election schedule is announced",
                "1 week before polling",
                "On the day of polling"
            ],
            answer: 1
        },
        {
            question: "What is the maximum strength of the Lok Sabha?",
            options: ["543", "550", "552", "250"],
            answer: 2
        }
    ],
    voterGuide: [
        {
            step: 1,
            title: "Check Eligibility",
            details: "You must be a citizen of India, 18 years of age or older as of January 1st of the year of the electoral roll revision, and a resident of the polling area."
        },
        {
            step: 2,
            title: "Register to Vote",
            details: "Fill Form 6 online via the Voter Portal (voters.eci.gov.in) or submit it offline to your Booth Level Officer (BLO) to get your name on the electoral roll."
        },
        {
            step: 3,
            title: "Get your EPIC",
            details: "Once registered, you will receive an Electors Photo Identity Card (EPIC) commonly known as a Voter ID card."
        },
        {
            step: 4,
            title: "Find Your Polling Booth",
            details: "Search your name in the electoral roll and find your assigned polling booth using the ECI website, Voter Helpline App, or SMS."
        },
        {
            step: 5,
            title: "Cast Your Vote",
            details: "On election day, go to your polling booth with your EPIC or other recognized ID. Press the blue button on the EVM against the candidate of your choice and verify your vote via VVPAT."
        }
    ],
    chatQuestions: [
        {
            id: "q1",
            question: "I turned 18 this year. How can I vote?",
            answer: "Congratulations! First, you must register to vote by filling out Form 6. You can do this online at voters.eci.gov.in or via the Voter Helpline App. Once registered, you will get an EPIC (Voter ID) card."
        },
        {
            id: "q2",
            question: "What documents do I need for voter registration?",
            answer: "To register via Form 6, you need: 1. A passport-size photograph. 2. Proof of age (Birth certificate, PAN card, Aadhaar, etc.). 3. Proof of residence (Aadhaar, Passport, Utility bill, etc.)."
        },
        {
            id: "q3",
            question: "Can I vote without a voter ID card?",
            answer: "Yes! If your name is on the electoral roll, you can vote using alternate approved IDs like your Aadhaar Card, PAN Card, Passport, Driving License, or MNREGA job card."
        },
        {
            id: "q4",
            question: "How do I check my name in the voter list?",
            answer: "You can check your name on the electoral roll by visiting electorsearch.eci.gov.in. You can search by your EPIC number, your personal details, or your mobile number."
        },
        {
            id: "q5",
            question: "What should I do if someone asks for money for votes?",
            answer: "Selling or buying votes is a criminal offense. You should immediately report it using the ECI's cVIGIL app. It allows citizens to anonymously report Model Code of Conduct violations."
        },
        {
            id: "q6",
            question: "How can I verify election news?",
            answer: "Always check the official ECI website or their verified social media handles for official announcements. Do not forward unverified WhatsApp messages. Use recognized fact-checking websites to verify suspicious news."
        }
    ],
    voterHelpGuides: [
        {
            id: "first-time",
            title: "I am voting for the first time",
            icon: "fa-baby-carriage",
            steps: [
                "Check if you are 18+ as of the qualifying date.",
                "Register online via Form 6 on the Voter Portal.",
                "Check your name on the electoral roll once approved.",
                "Find your designated polling booth online.",
                "Carry your Voter ID (or alternate valid ID) to the booth.",
                "Press the EVM button next to your candidate and check the VVPAT slip."
            ]
        },
        {
            id: "register-help",
            title: "I need to register as a voter",
            icon: "fa-address-card",
            steps: [
                "Gather Proof of Age, Proof of Address, and a photo.",
                "Go to voters.eci.gov.in or download the Voter Helpline App.",
                "Select 'New Voter Registration' (Form 6).",
                "Fill in the details and upload documents.",
                "Submit and track your application status using the Reference ID."
            ]
        },
        {
            id: "lost-id",
            title: "I lost my voter ID",
            icon: "fa-id-card-clip",
            steps: [
                "File an FIR or police report for the lost card.",
                "Fill Form 8 on the Voter Portal for a replacement EPIC.",
                "Alternatively, if an election is near, check your name on the roll.",
                "If your name is on the list, you can still vote using Aadhaar, PAN, Passport, etc."
            ]
        },
        {
            id: "evm-help",
            title: "I want to understand EVM & VVPAT",
            icon: "fa-microchip",
            steps: [
                "EVMs (Electronic Voting Machines) are highly secure standalone machines.",
                "Press the blue button next to your chosen candidate's symbol.",
                "Look at the VVPAT machine (the glass window box next to the EVM).",
                "A paper slip with your candidate's symbol will be visible for 7 seconds before dropping into the box.",
                "This ensures your vote was recorded exactly as cast."
            ]
        }
    ],
    readinessQuestions: [
        { id: "r1", text: "Are you 18 years of age or older?" },
        { id: "r2", text: "Is your name registered on the official voter list?" },
        { id: "r3", text: "Do you know the exact location of your polling booth?" },
        { id: "r4", text: "Do you have your Voter ID or an approved alternate ID ready?" },
        { id: "r5", text: "Do you know what items are prohibited inside the polling booth (like phones)?" }
    ],
    mapData: {
        "IN-UP": { name: "Uttar Pradesh", seats: 80, turnout: "59.21%", parties: "BJP, SP, BSP, INC", phase: "All 7 Phases" },
        "IN-MH": { name: "Maharashtra", seats: 48, turnout: "61.02%", parties: "BJP, SS, NCP, INC", phase: "Phases 1 to 5" },
        "IN-WB": { name: "West Bengal", seats: 42, turnout: "80.66%", parties: "AITC, BJP, INC, CPM", phase: "All 7 Phases" },
        "IN-BR": { name: "Bihar", seats: 40, turnout: "57.33%", parties: "RJD, JDU, BJP, INC", phase: "All 7 Phases" },
        "IN-TN": { name: "Tamil Nadu", seats: 39, turnout: "72.44%", parties: "DMK, AIADMK, INC, BJP", phase: "Phase 1" },
        "IN-MP": { name: "Madhya Pradesh", seats: 29, turnout: "71.16%", parties: "BJP, INC", phase: "Phases 1 to 4" },
        "IN-KA": { name: "Karnataka", seats: 28, turnout: "68.62%", parties: "INC, BJP, JDS", phase: "Phases 2 and 3" },
        "IN-GJ": { name: "Gujarat", seats: 26, turnout: "64.51%", parties: "BJP, INC, AAP", phase: "Phase 3" },
        "IN-RJ": { name: "Rajasthan", seats: 25, turnout: "66.34%", parties: "BJP, INC", phase: "Phases 1 and 2" },
        "IN-AP": { name: "Andhra Pradesh", seats: 25, turnout: "80.38%", parties: "YSRCP, TDP, JSP", phase: "Phase 4" },
        "IN-OR": { name: "Odisha", seats: 21, turnout: "73.29%", parties: "BJD, BJP, INC", phase: "Phases 4 to 7" },
        "IN-KL": { name: "Kerala", seats: 20, turnout: "77.67%", parties: "CPM, INC, BJP", phase: "Phase 2" },
        "IN-TS": { name: "Telangana", seats: 17, turnout: "62.77%", parties: "TRS, INC, BJP", phase: "Phase 4" },
        "IN-AS": { name: "Assam", seats: 14, turnout: "81.52%", parties: "BJP, INC, AIUDF", phase: "Phases 1 to 3" },
        "IN-JH": { name: "Jharkhand", seats: 14, turnout: "66.80%", parties: "JMM, BJP, INC", phase: "Phases 4 to 7" },
        "IN-PB": { name: "Punjab", seats: 13, turnout: "65.96%", parties: "AAP, INC, SAD, BJP", phase: "Phase 7" },
        "IN-CG": { name: "Chhattisgarh", seats: 11, turnout: "71.48%", parties: "BJP, INC", phase: "Phases 1 to 3" },
        "IN-HR": { name: "Haryana", seats: 10, turnout: "70.33%", parties: "BJP, INC", phase: "Phase 6" },
        "IN-DL": { name: "Delhi", seats: 7, turnout: "60.60%", parties: "BJP, AAP, INC", phase: "Phase 6" },
        "IN-JK": { name: "Jammu & Kashmir", seats: 5, turnout: "44.97%", parties: "NC, PDP, BJP, INC", phase: "Phases 1 to 5" },
        "IN-UT": { name: "Uttarakhand", seats: 5, turnout: "61.50%", parties: "BJP, INC", phase: "Phase 1" },
        "IN-HP": { name: "Himachal Pradesh", seats: 4, turnout: "72.42%", parties: "BJP, INC", phase: "Phase 7" },
        "IN-TR": { name: "Tripura", seats: 2, turnout: "83.20%", parties: "BJP, CPM, INC", phase: "Phases 1 and 2" },
        "IN-ML": { name: "Meghalaya", seats: 2, turnout: "71.42%", parties: "NPP, INC", phase: "Phase 1" },
        "IN-MN": { name: "Manipur", seats: 2, turnout: "82.69%", parties: "BJP, INC", phase: "Phases 1 and 2" },
        "IN-NL": { name: "Nagaland", seats: 1, turnout: "83.00%", parties: "NDPP, NPF", phase: "Phase 1" },
        "IN-GA": { name: "Goa", seats: 2, turnout: "75.14%", parties: "BJP, INC", phase: "Phase 3" },
        "IN-AR": { name: "Arunachal Pradesh", seats: 2, turnout: "82.11%", parties: "BJP, INC", phase: "Phase 1" },
        "IN-MZ": { name: "Mizoram", seats: 1, turnout: "63.13%", parties: "MNF, ZPM", phase: "Phase 1" },
        "IN-SK": { name: "Sikkim", seats: 1, turnout: "81.41%", parties: "SKM, SDF", phase: "Phase 1" },
        "IN-AN": { name: "Andaman & Nicobar", seats: 1, turnout: "65.12%", parties: "BJP, INC", phase: "Phase 1" },
        "IN-CH": { name: "Chandigarh", seats: 1, turnout: "70.61%", parties: "BJP, INC", phase: "Phase 7" },
        "IN-DN": { name: "Dadra & Nagar Haveli", seats: 1, turnout: "79.59%", parties: "BJP, IND", phase: "Phase 3" },
        "IN-DD": { name: "Daman & Diu", seats: 1, turnout: "71.85%", parties: "BJP, INC", phase: "Phase 3" },
        "IN-LD": { name: "Lakshadweep", seats: 1, turnout: "85.14%", parties: "NCP, INC", phase: "Phase 1" },
        "IN-PY": { name: "Puducherry", seats: 1, turnout: "81.25%", parties: "AINRC, INC", phase: "Phase 2" }
    }
};
