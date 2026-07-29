import type { IconType } from 'react-icons';
import { FaMicrosoft, FaCloud } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import { TbDeviceDesktop } from 'react-icons/tb';

export type Certification = {
  code: string;
  title: string;
  issuer: string;
  icon: IconType;
  status: 'Earned' | 'In Progress';
  year?: string;
  blurb: string;
};

export const certifications: Certification[] = [
  {
    code: 'AZ-900',
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    icon: FaCloud,
    status: 'Earned',
    year: '2023',
    blurb: 'Foundational knowledge of cloud concepts, Azure services, security, privacy, pricing, and support.',
  },
  {
    code: 'AZ-104',
    title: 'Microsoft Azure Administrator Associate',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    status: 'Earned',
    year: '2024',
    blurb: 'Managing, governing, securing, and monitoring identity, storage, compute, and virtual networking in Azure.',
  },
  {
    code: 'WSA-2025',
    title: 'Windows Server Administrator',
    issuer: 'Microsoft',
    icon: TbDeviceDesktop,
    status: 'Earned',
    year: '2025',
    blurb: 'Administering Windows Server environments: deployment, identity, storage, virtualization, and maintenance.',
  },
  {
    code: 'MS-102',
    title: 'Microsoft 365 Administrator Expert',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    status: 'In Progress',
    blurb: 'Designing and managing Microsoft 365 services, identity, compliance, and tenant-level operations.',
  },
  {
    code: 'MD-102',
    title: 'Microsoft 365 Endpoint Administrator',
    issuer: 'Microsoft',
    icon: TbDeviceDesktop,
    status: 'In Progress',
    blurb: 'Deploying, configuring, protecting, and managing devices and client applications with Intune.',
  },
  {
    code: 'CCNA',
    title: 'Cisco Certified Network Associate',
    issuer: 'Cisco',
    icon: SiCisco,
    status: 'In Progress',
    blurb: 'Fundamentals of networking: IP connectivity, services, security, automation, and programmability.',
  },
];
