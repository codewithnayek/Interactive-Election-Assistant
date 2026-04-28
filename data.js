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
            question: "How are the election dates decided?",
            answer: "The Election Commission of India (ECI) decides the election schedule based on factors like weather, academic calendars, festivals, and the availability of central police forces. They announce it during a press conference, bringing the Model Code of Conduct into immediate effect."
        },
        {
            id: "q2",
            question: "What happens if a candidate gets less than 1/6th of total votes?",
            answer: "If a candidate fails to secure at least one-sixth (16.67%) of the total valid votes polled in the constituency, they lose their security deposit. This is commonly known as 'Zamaanat Zabt' (forfeiture of deposit)."
        },
        {
            id: "q3",
            question: "How long does campaigning last?",
            answer: "Campaigning officially ends 48 hours before the conclusion of the polling in a given constituency. This period is called 'Election Silence', designed to give voters a peaceful time to decide."
        },
        {
            id: "q4",
            question: "Can I vote from anywhere in India?",
            answer: "Usually, you must vote at the specific polling booth assigned to your registered residential address. However, for certain categories like service personnel (military) and election duty staff, postal ballots or Electronically Transmitted Postal Ballot System (ETPBS) are available."
        },
        {
            id: "q5",
            question: "What happens during counting day?",
            answer: "Under heavy security, EVMs are brought to counting centers. The Returning Officer begins counting first with Postal Ballots, followed by EVM votes. VVPAT slips from 5 randomly selected polling stations per assembly segment are also counted and matched with EVM results to ensure transparency."
        }
    ]
};
