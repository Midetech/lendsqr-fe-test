
export interface Users {
    id: number
    orgName: string
    accountBalance: string
    accountNumber: string
    createdAt: string
    userName: string
    email: string
    phoneNumber: string
    status?: string
    profile: Profile
    socials: Social
    guarantor: Guarantor
    education: Education

}


export interface Profile {
    firstName: string
    lastName: string
    address: string
    avatar: string
    bvn: string
    gender: string
    phoneNumber: string
    maritalStatus?: string
    children?: string
    typeOfResidence?: string



}


export interface Social {
    facebook: string
    instagram: string
    twitter: string
}


export interface Guarantor {
    firstName: string
    lastName: string
    address: string
    gender: string
    phoneNumber: string
    email?: string
}

export interface Education {
    duration: string
    employmentStatus: string
    level: string
    loanRepayment: string
    monthlyIncome: string[]
    officeEmail: string
    sector: string
}
