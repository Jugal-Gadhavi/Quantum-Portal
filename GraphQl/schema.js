export const typeDefs = `#graphql
    type Expertise{
        userId: ID!
        Javascript: Int
        NodeJs: Int
        ReactJs: Int
        AngularJS: Int
    }
    type Familiarity{
        userId: ID!
        Javascript: Int
        ReactJs: Int
        NodeJs: Int
        AngularJs: Int
    }
    type User{
        userId: ID!
        email: String
        fullname: String
        hashedPassword: String
        information : Information
        expertise : Expertise
        familiarity : Familiarity
        applications: [Application]
    }
    type Information{
        percentage: Int
        yearOfPassing: Int
        collegeName: String
        qualification: String
        stream: String
        city: String
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
        portfolioLink: String
        resumeLink: String
    }
    type Preferences{
        jobId: ID!
        InstructionalDesigner:Int
        SoftwareEngineer:Int
        QualityEngineer:Int
    }
    type SubOpening{
        openingId: ID!
        jobId: ID!
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
        subOpenings: [SubOpening]
        preferences: Preferences
    }
    type Application{
        applicationId: ID!
        openingId : ID!
        userId: ID!
        timeSlot: String
        resume: String
    }
    type Query{
        users: [User]
        userById(id:ID!): User
        userByEmail(email:String): User
        jobPostings: [JobPosting]
        jobPostingById(id: ID!): JobPosting 
        familiarity: [Familiarity]
    }
    type Mutation{
        addApplication(application:addApplicationInput): Application
        changeInformation(object:changeInformationInput) : Information
    },
    input addApplicationInput{
        openingId : ID!
        userId: ID!
        timeSlot: String
    }
    input changeInformationInput{
        userId: ID!
        percentage: Int
        yearOfPassing: Int
        collegeName: String
        qualification: String
        stream: String
        city: String
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
        portfolioLink: String
        resumeLink: String
    }
  
`;
