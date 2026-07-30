import type { IconType } from 'react-icons';
import {
  FaWindows,
  FaMicrosoft,
  FaNetworkWired,
  FaPowerOff,
  FaServer,
  FaCloud,
} from 'react-icons/fa';
import { SiCisco, SiVmware } from 'react-icons/si';
import { TbCloud, TbTerminal2 } from 'react-icons/tb';
import { PiHardDrivesBold, PiFoldersBold } from 'react-icons/pi';

export type Skill = {
  name: string;
  icon: IconType;
  category: 'Cloud' | 'Infrastructure' | 'Networking' | 'Identity' | 'Automation';
  blurb: string;
};

export const skills: Skill[] = [
  {
    name: 'Windows Server',
    icon: FaWindows,
    category: 'Infrastructure',
    blurb: 'Administration, GPO, FS, IIS, roles & features across 2016–2025.',
  },
  {
    name: 'Microsoft 365',
    icon: FaMicrosoft,
    category: 'Identity',
    blurb: 'Exchange Online, SharePoint, Teams, Entra ID, MDM/Intune.',
  },
  {
    name: 'Active Directory',
    icon: FaServer,
    category: 'Identity',
    blurb: 'AD DS, OU design, GPO, delegated administration, trust topology.',
  },
  {
    name: 'VMware ESXI',
    icon: SiVmware,
    category: 'Infrastructure',
    blurb: 'ESXi, vCenter, vMotion, snapshots, resource pools.',
  },
  {
    name: 'Hyper-V',
    icon: PiHardDrivesBold,
    category: 'Infrastructure',
    blurb: 'Cluster setup, live migration, virtual switches, checkpoints.',
  },
  {
    name: 'Backup & Restore',
    icon: PiHardDrivesBold,
    category: 'Infrastructure',
    blurb: '3-2-1 strategy, Azure Backup, Veeam-style DR, bare-metal recovery.',
  },
  {
    name: 'Networking',
    icon: FaNetworkWired,
    category: 'Networking',
    blurb: 'DHCP Server, DNS, subnetting, routing, VPN, firewall & switching.',
  },
  {
    name: 'Cisco',
    icon: SiCisco,
    category: 'Networking',
    blurb: 'VLANs/trunk config, ACLs, static & dynamic routing.',
  },
  {
    name: 'Firewall',
    icon: FaNetworkWired,
    category: 'Networking',
    blurb: 'RouterOS, firewall, queues, VPN tunnels, bridge configuration.',
  },
  {
    name: 'PowerShell',
    icon: TbTerminal2,
    category: 'Automation',
    blurb: 'Automation scripts, AD/Exchange/Office 365 bulk operations.',
  },
  {
    name: 'Azure Virtual Machines',
    icon: TbCloud,
    category: 'Cloud',
    blurb: 'Provisioning, sizing, availability sets, extensions & image builds.',
  },
  {
    name: 'Azure Policy',
    icon: FaPowerOff,
    category: 'Cloud',
    blurb: 'Compliance guardrails, tagging enforcement, guest config audits.',
  },
  {
    name: 'Azure File Sync',
    icon: PiFoldersBold,
    category: 'Cloud',
    blurb: 'Sync groups, cloud tiering, server endpoints, multi-site replication.',
  },
  {
    name: 'Cloud Administration',
    icon: FaServer,
    category: 'Cloud',
    blurb: 'IaaS/PaaS operations, cost control, monitoring, security baseline.',
  },
 {
    name: 'Ai Tools',
    icon: FaServer,
    category: 'Tools',
    blurb: 'ChatGPT, Microsoft Copilot, GitHub Copilot, Perplexity AI, Claude AI,Google Gemini.',
  },
 {
    name: 'RDP Tools',
    icon: FaServer,
    category: 'Tools',
    blurb: 'RDP, Team Viewer, AnyDesk, Rustdesk, Chrome Remote Desktop.',
  },

];
