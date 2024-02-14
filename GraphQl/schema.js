export const typeDefs = `#graphql
    type User{
        userId: ID!
        email: String
        fullname: String
        hashedPassword: String
        percentage: Int
        yearOfPassing: Int
        collegeName: String
        qualification: String
        stream: String
        location: String
        yearOfExperience: Int
        currentCTC: Int
        expectedCTC: Int
        phoneNumber: String
        applicantType: String
        noticePeriod: Int
        noticePeriodDuration: Int
        noticePeriodEnd: String
        previouslyApplied: Int
        previouslyAppliedRole: String
        referrer: String
        # expertise:{
        #     javascript: Int
        #     React: Int
        #     AngularJS: Int
        # },
        # familiarity:{
        #     javascript: Int
        #     React: Int
        #     AngularJS: Int
        # }
    }
    
    type Preferences{
        jobId: JobPosting
        instructionalDesigner:Int
        softwareEngineer:Int
        qualityEngineer:Int
    }
    type SubOpening{
        openingId: ID!
        JobPosting: JobPosting
        jobRole: String
        compensation: Int
        description: String
        requirements: String
    }
    type JobPosting{
        jobId: ID!
        startDate: String
        expirationDate: String
        location: String  
        subOpening: [SubOpening]
    }
    type Application{
        applicationId: String
        opening: SubOpening
        user: User
        timeSlot: String
        resume: String
    }
    type Query{
        # JobPostings: [JobPosting]
        users: [User]
        user(id:ID!): User
        # applications: [Application]
    }
`;

