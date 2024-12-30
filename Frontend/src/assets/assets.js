import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import overheating from './overheating.svg'
import battery from './battery.svg'
import ScreenProblem from './ScreenProblem.svg'
import softwareProblem from './softwareProblem.svg'
import SoundProblem from './soundProblem.svg'
import StorageProblem from './StorageProblem.svg'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Software Glitches',
        image: softwareProblem
    },
    {
        speciality: 'Screen Issues',
        image: ScreenProblem
    },
    {
        speciality: 'Battery Problems',
        image: battery
    },
    {
        speciality: 'Overheating',
        image: overheating
    },
    {
        speciality: 'Sound Problems',
        image: SoundProblem
    },
    {
        speciality: 'Storage Problems',
        image: StorageProblem
    },
]

export const Technician = [
    {
        _id: 'doc1',
        name: ' Richard James',
        image: doc1,
        speciality: 'Software Glitches',
        degree: 'MCA',
        experience: '4 Years',
        about: 'Alex is an experienced mobile technician committed to providing high-quality repair services, specializing in diagnosing and resolving a wide range of mobile issues efficiently. With a focus on fast, reliable service, Alex ensures each device is restored to optimal performance.',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Emily Larson',
        image: doc2,
        speciality: 'Software Glitches',
        degree: 'Btech Mechanical',
        experience: '3 Years',
        about: 'James is dedicated to delivering comprehensive mobile repair services, with a focus on preventive maintenance, precise diagnostics, and effective repair strategies. Committed to ensuring each device functions at its best, Alex provides reliable, efficient solutions tailored to meet customers',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Sarah Patel',
        image: doc3,
        speciality: 'Software Glitches',
        degree: 'BCA',
        experience: '1 Years',
        about: 'Sam is committed to delivering thorough mobile repair services, specializing in preventive care, accurate diagnosis, and efficient repair solutions. With a focus on ensuring each device performs optimally, Sam is dedicated to providing dependable support for all mobile issues',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Christopher Lee',
        image: doc4,
        speciality: 'Screen Issues',
        degree: 'Btech Civil',
        experience: '2 Years',
        about: 'Jordan takes pride in offering comprehensive mobile repair solutions, focusing on proactive maintenance, precise troubleshooting, and effective repair techniques. Driven by a commitment to quality, Jordan ensures each device receives the care needed for peak performance.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Jennifer Garcia',
        image: doc5,
        speciality: 'Screen Issues',
        degree: 'MBA',
        experience: '4 Years',
        about: 'Taylor specializes in troubleshooting and repairing sound issues in mobile phones, including speaker and microphone repairs. With a keen focus on audio clarity and functionality, Taylor provides dependable solutions for all mobile audio concerns.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Andrew Williams',
        image: doc6,
        speciality: 'Screen Issues',
        degree: 'Electrical Engeering',
        experience: '4 Years',
        about: 'Morgan specializes in mobile battery repair, focusing on diagnostics and solutions for drainage, overheating, and charging problems. With a commitment to reliability, Morgan restores every devices power capacity for seamless, long-lasting use.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Christopher Davis',
        image: doc7,
        speciality: 'Battery Problems',
        degree: 'Computer Engeering',
        experience: '4 Years',
        about: 'Jamie specializes in mobile storage solutions, expertly handling issues like memory overload and storage errors. Committed to seamless performance, Jamie helps users maximize their devices storage potential.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Timothy White',
        image: doc8,
        speciality: 'Battery Problems',
        degree: 'Btech CS',
        experience: '3 Years',
        about: 'Toby specializes in troubleshooting and repairing mobile charging problems, including port malfunctions and battery compatibility issues. With a commitment to high-quality service, Toby restores charging functionality to keep devices powered.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Ava Mitchell',
        image: doc9,
        speciality: 'Battery Problems',
        degree: 'BSC',
        experience: '1 Years',
        about: 'Parker specializes in mobile camera repairs, expertly addressing issues such as focus errors, cracked lenses, and software glitches. Parker is committed to restoring full camera functionality for top-quality photos and videos.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Jeffrey King',
        image: doc10,
        speciality: 'Overheating',
        degree: 'BSC',
        experience: '2 Years',
        about: 'Sky specializes in troubleshooting mobile lag problems, including app delays and slow system response. With a commitment to efficient service, Sky restores devices to peak performance, eliminating frustrating lags.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Zoe Kelly',
        image: doc11,
        speciality: 'Overheating',
        degree: 'MSC',
        experience: '4 Years',
        about: 'Charlie is an app technician skilled in diagnosing and resolving issues with mobile applications, including crashes, compatibility problems, and loading errors. Charlies expertise ensures a smooth, reliable app experience for users.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Patrick Harris',
        image: doc12,
        speciality: 'Overheating',
        degree: 'Btech EC',
        experience: '4 Years',
        about: 'Evan is a skilled RAM technician dedicated to diagnosing and solving memory-related issues, from slow performance to crashes caused by insufficient RAM. Evan ensures devices operate smoothly with optimal memory usage.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Chloe Evans',
        image: doc13,
        speciality: 'Sound Problems',
        degree: 'BA',
        experience: '4 Years',
        about: 'Blake is an expert FPS technician skilled in resolving frame rate problems that cause jittery or delayed visuals. Whether it’s gaming or video playback, Blake ensures smooth and responsive performance on every device.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Ryan Martinez',
        image: doc14,
        speciality: 'Sound Problems',
        degree: 'MA',
        experience: '3 Years',
        about: 'Logan is a skilled technician specializing in diagnosing and resolving frequent restart issues. Whether caused by software glitches or hardware malfunctions, Logan ensures devices run reliably without unnecessary interruptions.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Amelia Hill',
        image: doc15,
        speciality: 'Storage Problems',
        degree: 'BBA',
        experience: '1 Years',
        about: 'Cameron is an expert in mobile restart issues, identifying the root causes of frequent rebooting, including software crashes or faulty components. Camerons solutions restore stability and reliability to every device.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]