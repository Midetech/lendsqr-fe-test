import users from "../../assets/siderbar-icons/users.svg"
import user from "../../assets/siderbar-icons/user.svg"
import sack from "../../assets/siderbar-icons/sack.svg"
import handshake from "../../assets/siderbar-icons/handshake.svg"
import piggy_bank from "../../assets/siderbar-icons/piggy-bank.svg"
import loan_request from "../../assets/siderbar-icons/loan-request.svg"
import whitelist from "../../assets/siderbar-icons/whitelist.svg"
import karma from "../../assets/siderbar-icons/karma.svg"
import briefcase from "../../assets/siderbar-icons/briefcase.svg"
import savings from "../../assets/siderbar-icons/savings.svg"
import coins from "../../assets/siderbar-icons/coins.svg"
import transaction from "../../assets/siderbar-icons/transaction.svg"
import services from "../../assets/siderbar-icons/services.svg"
import service_account from "../../assets/siderbar-icons/service-account.svg"
import settlement from "../../assets/siderbar-icons/settlement.svg"
import chart from "../../assets/siderbar-icons/chart.svg"
import preference from "../../assets/siderbar-icons/preference.svg"
import pricing from "../../assets/siderbar-icons/briefcase.svg"
import audit from "../../assets/siderbar-icons/audit.svg"
import systems from "../../assets/siderbar-icons/systems.svg"
import sign_out from "../../assets/siderbar-icons/sign-out.svg"


export const navLinks = [
    {
        title: 'customers',
        links: [
            {
                title: 'Users',
                url: "/dashboard/users",
                icon: users
            },
            {
                title: 'Guarantors',
                url: "#",
                icon: user
            },
            {
                title: 'Loans',
                url: "#",
                icon: sack
            },
            {
                title: 'Decision Models',
                url: "#",
                icon: handshake
            },
            {
                title: 'Savings',
                url: "#",
                icon: piggy_bank
            },
            {
                title: 'Loan Requests',
                url: "#",
                icon: loan_request
            },
            {
                title: 'Whitelist',
                url: "#",
                icon: whitelist
            }, {
                title: 'Karma',
                url: "#",
                icon: karma
            },
        ]
    },
    {
        title: 'Businesses',
        links: [
            {
                title: 'Organizations',
                url: "#",
                icon: briefcase
            },
            {
                title: 'Loan Products',
                url: "#",
                icon: loan_request
            },
            {
                title: 'Savings Products',
                url: "#",
                icon: savings
            },
            {
                title: 'Fees and Charges',
                url: "#",
                icon: coins
            },
            {
                title: 'Transactions',
                url: "#",
                icon: transaction
            },

            {
                title: 'Services',
                url: "#",
                icon: services
            }, {
                title: 'Service Account',
                url: "#",
                icon: service_account
            },
            {
                title: 'Settlement',
                url: "#",
                icon: settlement
            },
            {
                title: 'Reports',
                url: "#",
                icon: chart
            },
        ]
    },
    {
        title: 'Settings',
        links: [
            {
                title: 'Preferences',
                url: "#",
                icon: preference
            },
            {
                title: 'Fees  and  Pricing',
                url: "#",
                icon: pricing
            },
            {
                title: 'Audit Logs',
                url: "#",
                icon: audit
            },
            {
                title: 'Systems Messages',
                url: "#",
                icon: systems
            },
            {
                title: 'Logout',
                url: "/login",
                icon: sign_out
            }
        ]
    }
]
