export const profile = {
  name: 'Mohamed Essam',
  role: 'Cloud & System Administrator',

  tagline: 'IT Support Engineer | System Administrator | Azure Administrator',

  description:
    '7+ years of experience in IT Support, Windows Server, Microsoft 365, Azure, Entra ID, Networking, and ERP Administration.',

  location: 'Saudi Arabia',
  email: 'muhaameed.essaam@gmail.com',
  phone: '+966 53 518 0185',

  cvUrl: 'https://1drv.ms/b/c/4e7198a528d9cb8e/IQB4Zw8AJe0MRars5jv8zCqnARyw0nhuFbjhQXpw9jo_26k?e=UxrDAe',
  roles: ['Windows Server', 'Azure', 'Microsoft 365', 'Active Directory', 'Networking'],
  social: {
    linkedin: 'https://www.linkedin.com/in/mohammed-essaam/',
    github: 'https://github.com/MohamedEssam-IT',
    email: 'mailto:muhaammed.essaam@gmail.com',
  },
  stats: [
    { label: 'Years in IT Infrastructure', value: 7, suffix: '+' },
    { label: 'Support & Managed Users', value: 1000, suffix: '+' },
    { label: 'Servers & VMs Managed', value: 150, suffix: '+' },
    { label: 'Support Tickets Resolved', value: 5000, suffix: '+' },

  ],
};

export const about = {
  paragraphs: [
    'I am a Cloud & System Administrator with hands-on experience designing, deploying, and maintaining enterprise-grade infrastructure across Microsoft Azure and on-premises Windows Server environments. My work centers on building systems that are secure by default, highly available, and simple to operate — from Active Directory forests and Group Policy to multi-region Azure landing zones.',
    'I specialize in identity, networking, and virtualization: standing up hybrid topologies with Entra ID Connect, locking down tenant compliance with Azure Policy, and running virtualization fabrics on Hyper-V and VMware. I lean heavily on PowerShell to automate repetitive operations, enforce configuration baselines, and ship changes through repeatable, auditable workflows.',
    'Beyond day-to-day operations, I care about resilience. I design backup and disaster-recovery strategies around the 3-2-1 rule, validate restores, and monitor cost and performance so infrastructure stays predictable as it scales. I am currently extending my certifications toward the Azure Administrator Associate (AZ-104), Microsoft 365 Administrator (MS-102), and CCNA tracks.',
  ],
  highlights: [
    'Hybrid identity & directory services',
    'Azure IaaS governance & cost control',
    'Virtualization on Hyper-V & VMware',
    'PowerShell-driven automation',
    'Network design & troubleshooting',
    'Backup, DR & business continuity',
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Almaameer Company for Bakery & Pastry',
    role: 'IT Support & ERP System Admin',
    location: 'Al Khobar, Saudi Arabia',
    dates: 'Feb 2024 — Present',
    summary:
      'Own ERP and IT systems for a multi-site bakery operation, troubleshooting complex hardware, software, and network issues to keep production and retail running with minimal downtime.',
    achievements: [
      'Managed ERP and IT systems end-to-end, troubleshooting complex hardware, software, and network issues to ensure minimal downtime.',
      'Reduced recurring POS downtime by troubleshooting network and hardware issues efficiently.',
      'Managed and supported Windows Server environments, Active Directory, and VMware virtualization.',
      'Documented technical procedures and created knowledge base articles for the support team.',
      'Monitored backups and performed data recovery tests to ensure data integrity.',
    ],
    stack: ['Windows Server', 'Active Directory', 'VMware', 'POS Systems', 'ERP', 'MikroTik'],
  },
  {
    company: 'Orange Main Upper Site',
    role: 'Technical Network & Devices (IT Assistant)',
    location: 'Asyut, Egypt',
    dates: 'Dec 2023 — Feb 2024',
    summary:
      'Installed, configured, and supported network devices and endpoints, assisting with LAN/WAN connectivity and remote support operations.',
    achievements: [
      'Installed, configured, and supported network devices (routers, switches) and endpoints.',
      'Assisted in troubleshooting LAN/WAN connectivity and VPN issues.',
      'Provided remote support using RDP and AnyDesk.',
      'Maintained inventory of IT assets and ensured compliance with company IT policies.',
    ],
    stack: ['Routers', 'Switches', 'LAN/WAN', 'VPN', 'RDP', 'AnyDesk'],
  },
  {
    company: 'Futures Languages School',
    role: 'IT Assistant',
    location: 'Hurghada, Egypt',
    dates: 'Dec 2022 — Dec 2023',
    summary:
      'Supported classroom IT systems, smart boards, and audio-visual equipment, and assisted with software and OS management for teaching systems.',
    achievements: [
      'Supported classroom IT systems, smart boards, and audio-visual equipment.',
      'Assisted in software installations, OS updates, and configuration for teaching systems.',
      'Documented recurring issues and contributed to the team knowledge base.',
    ],
    stack: ['Smart Boards', 'Audio/Visual', 'OS Configuration', 'Software Installation'],
  },
  {
    company: 'All In One for IT Solutions',
    role: 'Technical Network (Part-time)',
    location: 'Hurghada, Egypt',
    dates: '2019 — 2022',
    summary:
      'Provided network setup and troubleshooting support during study, including fiber optic infrastructure and wireless links.',
    achievements: [
      'Provided network setup and troubleshooting support during study period.',
      'Assisted in system configuration, router and switch management, and endpoint support.',
      'Installed, spliced, and tested fiber optic cables using Fluke testing equipment.',
      'Connected and maintained fiber links through Core Switches and Media Converters, ensuring reliable network connectivity.',
      'Assisted in troubleshooting fiber infrastructure and wireless links using Ubiquiti NanoStation devices.',
    ],
    stack: ['Fiber Optic', 'Fluke Testing', 'Core Switches', 'Media Converters', 'Ubiquiti NanoStation', 'Routers', 'Switches'],
  },
];
