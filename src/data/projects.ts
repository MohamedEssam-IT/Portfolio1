import type { IconType } from 'react-icons';
import {
  FaWindows,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa';
import { SiVmware } from 'react-icons/si';
import { TbCloud, TbDeviceDesktop } from 'react-icons/tb';
import { PiFoldersBold } from 'react-icons/pi';

export type Project = {
  slug: string;
  title: string;
  icon: IconType;
  tagline: string;
  category: 'Cloud' | 'Infrastructure' | 'Networking' | 'Identity' | 'Virtualization';
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  commands: { label: string; code: string }[];
};

export const projects: Project[] = [
  {
    slug: 'azure-policy',
    title: 'Azure Policy Governance Framework',
    icon: FaShieldAlt,
    tagline: 'Tenant-wide compliance guardrails enforcing tagging, regions, SKUs, and security baselines.',
    category: 'Cloud',
    overview:
      'A curated set of Azure Policy and Initiative definitions that enforce governance across an Azure tenant — required tags, allowed resource providers, approved VM SKUs, region restrictions, and security baselines such as disk encryption and managed-disk-only rules. Non-compliant resources surface in a Compliance dashboard with remediation tasks wired to bring drift back into line.',
    problem:
      'A growing Azure estate with no guardrails: resources spun up in any region with arbitrary SKUs, missing cost-center tags, and no consistent security baseline. Spend forecasting was guesswork, and auditors could not trust that resources met the org standard.',
    solution:
      'Designed a layered governance model: tag enforcement at subscription scope, SKU and region policies at management-group scope, and security baselines (encryption, HTTPS-only storage, managed disks only) applied tenant-wide. Grouped related policies into Initiatives, assigned them with managed-identity system assignments, and created remediation tasks so existing non-compliant resources auto-fix. Built a Compliance dashboard view per environment.',
    architecture: [
      'Management Group hierarchy maps to environment (Prod / Non-Prod / Sandbox).',
      'Initiatives bundle tag-compliance, allowed-SKU, allowed-region, and security-baseline policies.',
      'System-assigned managed identities power remediation tasks for existing resources.',
      'Compliance state is reported per assignment and surfaced in Azure Advisor / Policy blade.',
      'Exemptions are scoped and time-boxed for break-glass scenarios.',
    ],
    technologies: ['Azure Policy', 'Azure Management Groups', 'Azure RBAC', 'Azure Resource Graph', 'PowerShell', 'Bicep'],
    commands: [
      {
        label: 'Assign a policy initiative via PowerShell',
        code: `$params = @{
  Name                 = 'enforce-gov-initiative'
  DisplayName          = 'Enforce Governance Baseline'
  PolicySetDefinition  = Get-AzPolicySetDefinition -Name 'OrgGovernanceInitiative'
  Scope                = '/providers/Microsoft.Management/managementGroups/Prod'
  PolicyParameterObject = @{ allowedRegions = @('westeurope','northeurope') }
  IdentityType         = 'SystemAssigned'
  Location             = 'westeurope'
}
New-AzPolicyAssignment @params`,
      },
      {
        label: 'Trigger remediation for a non-compliant resource',
        code: `Start-AzPolicyRemediation -Name 'fix-disk-encryption' \\
  -PolicyAssignmentId '/providers/Microsoft.Management/managementGroups/Prod/providers/Microsoft.Authorization/policyAssignments/enforce-gov-initiative' \\
  -ResourceDiscoveryMode ReEvaluateCompliance`,
      },
    ],
  },
  {
    slug: 'windows-server-2025-lab',
    title: 'Windows Server 2025 Lab Environment',
    icon: FaWindows,
    tagline: 'Nested Hyper-V lab simulating a multi-tier enterprise domain with AD, DHCP, and Group Policy.',
    category: 'Infrastructure',
    overview:
      'A fully isolated Windows Server 2025 lab built on a Hyper-V host with nested virtualization: a DC running AD DS and DNS/DHCP, a member server for file & IIS roles, and a Windows 11 client — all wired through an internal virtual switch. The lab is used to validate GPO designs, new roles, and PowerShell automation before promoting changes to production.',
    problem:
      'Needed a safe, reproducible environment to test Windows Server 2025 features, Active Directory changes, and GPO rollouts without risking production domains or relying on fragile disposable VMs.',
    solution:
      'Stood up a dedicated Hyper-V host with an internal virtual switch (no external path), deployed a DC with AD DS + DNS + DHCP, a member server for file/IIS roles, and a Windows 11 client. Used PowerShell to provision checkpoints before each change, and a base VHDX with an answer file for fast, identical rebuilds.',
    architecture: [
      'Hyper-V host with nested virtualization enabled on the lab vSwitch.',
      'Internal-only virtual switch (no internet) to isolate the lab domain.',
      'DC: AD DS, DNS, DHCP, FSMO roles, configured OU/GPO baseline.',
      'Member server: File Services, IIS, used for role & GPO testing.',
      'Windows 11 client joined to the lab domain for end-user policy validation.',
      'Checkpoints before every change; base VHDX + answer file for rebuilds.',
    ],
    technologies: ['Windows Server 2025', 'Hyper-V', 'Active Directory', 'DNS', 'DHCP', 'Group Policy', 'PowerShell'],
    commands: [
      {
        label: 'Promote the first DC with PowerShell',
        code: `Install-ADDSDomainController `
          + `-InstallDns `
          + `-NoGlobalCatalog:$false `
          + `-CreateDnsDelegation:$false `
          + `-CriticalReplicationOnly:$false `
          + `-DomainName "lab.mohamedessam.local" `
          + `-SiteName "Default-First-Site-Name" `
          + `-Force:$true`,
      },
      {
        label: 'Snapshot the lab before a risky change',
        code: `Get-VM -Name DC01, MEM01, WIN11 | `
          + `Checkpoint-VM -SnapshotName "Pre-GPO-Rollout-$(Get-Date -f yyyyMMdd)"`,
      },
    ],
  },
  {
    slug: 'active-directory-lab',
    title: 'Active Directory Domain Design Lab',
    icon: FaServer,
    tagline: 'Multi-domain forest with delegated OUs, fine-grained password policies, and Tier-0 admin model.',
    category: 'Identity',
    overview:
      'A reference Active Directory design built to model a tiered-administration model: a single forest root with delegated OUs per business unit, fine-grained password policies, and a Tier-0 / Tier-1 / Tier-2 admin separation following least privilege. Includes AGPM-style GPO change control and LAPS for local admin password rotation.',
    problem:
      'A flat AD with over-privileged Domain Admins and no delegation. Everyone was a Domain Admin, local admin passwords were shared, and GPO changes went straight to production with no review.',
    solution:
      'Redesigned the OU structure around business units with delegated administration via security groups, implemented a Tier-0/1/2 admin separation model, deployed LAPS for randomized local admin passwords, and introduced fine-grained password policies for privileged accounts. GPO changes are staged and reviewed before production deployment.',
    architecture: [
      'Single-forest, single-domain with OU hierarchy mapped to business units.',
      'Tier-0 (DCs/AD), Tier-1 (servers), Tier-2 (workstations) admin separation.',
      'Role-based delegation groups; Domain Admins reduced to break-glass only.',
      'LAPS deployed for automatic local admin password rotation.',
      'Fine-grained password policies for privileged vs standard accounts.',
      'GPO change control: stage → review → production deployment.',
    ],
    technologies: ['Active Directory', 'Group Policy', 'LAPS', 'PowerShell', 'Windows Server', 'DNS'],
    commands: [
      {
        label: 'Delegate OU administration to a role group',
        code: `# Grant Helpdesk reset-password rights scoped to an OU
$sid = (Get-ADGroup "Helpdesk-PasswordReset").SID.SID
$acl = Get-Acl "AD:OU=Users,OU=Sales,DC=lab,DC=mohamedessam,DC=local"
$acl.AddAccessRule((New-Object System.DirectoryServices.ActiveDirectoryAccessRule(
  $sid, 'ExtendedRight', 'Allow',
  [GUID]"00299570-246d-11d0-a768-00aa006e0529"))) # User-Force-Change-Password
Set-Acl "AD:OU=Users,OU=Sales,DC=lab,DC=mohamedessam,DC=local" $acl`,
      },
      {
        label: 'Set a fine-grained password policy for admins',
        code: `New-ADFineGrainedPasswordPolicy -Name "AdminFGPP" `
          + `-Precedence 100 -MinPasswordLength 16 -PasswordHistoryCount 24 `
          + `-MinPasswordAge 1.0:0:0 -MaxPasswordAge 60.0:0:0 `
          + `-ComplexityEnabled $true -ReversibleEncryptionEnabled $false

Add-ADFineGrainedPasswordPolicySubject "AdminFGPP" `
          + `-Subjects "Tier0Admins","Tier1Admins"`,
      },
    ],
  },
  {
    slug: 'azure-virtual-machines',
    title: 'Azure Virtual Machines Deployment',
    icon: TbCloud,
    tagline: 'Repeatable IaaS landing zone: VNet, subnets, NSGs, availability sets, and IaC-driven VM provisioning.',
    category: 'Cloud',
    overview:
      'A standardized Azure IaaS deployment pattern for workload VMs: hub-and-spoke VNet topology, segmented subnets with NSGs, availability sets/zones, Just-in-Time admin access, and disk encryption. VMs are provisioned through Bicep/ARM templates with naming and tagging standards applied automatically.',
    problem:
      'VMs were being created ad-hoc with inconsistent names, no tagging, open RDP to the internet, and no availability guarantees — making operations and cost tracking painful.',
    solution:
      'Built a reusable IaC landing zone: hub VNet with Azure Firewall, spoke VNets peered back, NSG rules limiting RDP to a bastion/JIT, availability sets for tiered workloads, and a Bicep module enforcing naming/tagging/encryption standards. Enabled Azure Disk Encryption and Just-in-Time VM access for admin connectivity.',
    architecture: [
      'Hub-and-spoke VNet topology with VNet peering + Azure Firewall egress.',
      'Segmented subnets with NSG rules; RDP restricted to Bastion / JIT.',
      'Availability sets for tiered workloads; zones for SLA-critical tiers.',
      'Bicep/ARM modules enforce naming, tagging, and disk encryption standards.',
      'Azure Disk Encryption (CMK) + JIT admin access via Microsoft Defender.',
      'Boot diagnostics + Azure Monitor agent for health and alerting.',
    ],
    technologies: ['Azure VM', 'Azure VNet', 'NSG', 'Azure Bastion', 'Azure Disk Encryption', 'Bicep', 'PowerShell'],
    commands: [
      {
        label: 'Create a VM with standardized tags via PowerShell',
        code: `New-AzVM -ResourceGroupName 'rg-workload-prod-weu' `
          + `-Name 'vm-app01' -Location 'westeurope' `
          + `-VirtualNetworkName 'vnet-spoke-prod-weu' `
          + `-SubnetName 'snet-app' -SecurityGroupName 'nsg-app' `
          + `-PublicIpAddressAddressName 'none' `
          + `-ImageName 'Win2022Datacenter' -Size 'Standard_D2s_v5' `
          + `-Credential (Get-Credential) `
          + `-Tag @{ Environment='Prod'; Owner='CloudOps'; CostCenter='IT-100' }`,
      },
      {
        label: 'Enable Just-in-Time RDP access',
        code: `Set-AzJitNetworkAccessPolicy -ResourceGroupName 'rg-workload-prod-weu' `
          + `-Name 'vm-app01' -Location 'westeurope' `
          + `-VirtualMachine (Get-AzVM -ResourceGroupName 'rg-workload-prod-weu' -Name 'vm-app01') `
          + `-Port 3389 -Protocol 'TCP' -AllowedSourceAddressRange '10.0.0.0/8' `
          + `-MaxRequestDuration (New-TimeSpan -Hours 2)`,
      },
    ],
  },
  {
    slug: 'azure-file-sync',
    title: 'Azure File Sync Hybrid Deployment',
    icon: PiFoldersBold,
    tagline: 'Centralize branch file servers in Azure Files with cloud tiering for fast local access.',
    category: 'Cloud',
    overview:
      'A hybrid file-services architecture using Azure File Sync to centralize corporate file data in Azure Files while keeping a fast local cache on branch Windows Servers. Cloud tiering keeps only hot data on-prem, syncing changes bi-directionally and providing a cloud-native backup target.',
    problem:
      'Branch file servers were islands: local storage was full, backups were inconsistent, and there was no central control or shared access across sites.',
    solution:
      'Deployed Azure File Sync with a Storage Sync Service, a sync group per share, and server endpoints on each branch server. Enabled cloud tiering so only recently accessed files stay local, the rest tier to Azure Files. Used Azure Backup for the file share as the authoritative backup target.',
    architecture: [
      'Storage Sync Service as the control plane for all registered servers.',
      'One sync group per file share; Azure Files endpoint is the cloud endpoint.',
      'Server endpoints on branch servers with cloud tiering enabled.',
      'Cloud tiering policy: tier files older than 7 days / above 80% volume.',
      'Azure Backup protects the Azure file share as the primary backup.',
      'Offline data transfer (Data Box) used for the initial large seed.',
    ],
    technologies: ['Azure File Sync', 'Azure Files', 'Cloud Tiering', 'Azure Backup', 'Windows Server', 'PowerShell'],
    commands: [
      {
        label: 'Register a server and create a sync group',
        code: `Register-AzStorageSyncServer -ResourceGroupName 'rg-sync' `
          + `-StorageSyncServiceName 'sss-prod-weu'

New-AzStorageSyncGroup -ResourceGroupName 'rg-sync' `
          + `-StorageSyncServiceName 'sss-prod-weu' -Name 'sg-corporate'

New-AzStorageSyncCloudEndpoint -ResourceGroupName 'rg-sync' `
          + `-StorageSyncServiceName 'sss-prod-weu' -SyncGroupName 'sg-corporate' `
          + `-StorageAccountResourceId $storageId -AzureFileShareName 'share-corporate'`,
      },
      {
        label: 'Add a server endpoint with cloud tiering',
        code: `New-AzStorageSyncServerEndpoint `
          + `-ResourceGroupName 'rg-sync' -StorageSyncServiceName 'sss-prod-weu' `
          + `-SyncGroupName 'sg-corporate' -ServerName 'SRV-BRANCH01' `
          + `-ServerLocalPath 'D:\\Shares\\Corporate' `
          + `-CloudTiering -VolumeFreeSpacePercent 20 `
          + `-TierFilesOlderThanDays 7`,
      },
    ],
  },
  {
    slug: 'hyper-v-lab',
    title: 'Hyper-V Cluster Lab',
    icon: TbDeviceDesktop,
    tagline: 'Failover cluster with live migration, converged virtual switches, and shared iSCSI storage.',
    category: 'Virtualization',
    overview:
      'A Hyper-V failover cluster lab built on two nodes with shared iSCSI storage, converged virtual switches, and live migration. Validates cluster quorum, VM placement, and live migration workflows before applying the same pattern to production.',
    problem:
      'Needed to validate Hyper-V clustering, storage, and live migration behavior in a safe lab before promoting the architecture to production — and to train on troubleshooting failover scenarios.',
    solution:
      'Built a two-node cluster with a witness, shared iSCSI LUNs as Cluster Shared Volumes, converged virtual switches for management and VM traffic, and validated live migration, quick migration, and VM placement. Documented the runbook for node maintenance and failure scenarios.',
    architecture: [
      'Two Hyper-V nodes joined to an AD domain (lab domain).',
      'Failover cluster with file-share witness for quorum.',
      'Shared iSCSI storage presented as Cluster Shared Volumes (CSV).',
      'Converged virtual switch with SET and separate vNICs for mgmt/cluster/LM.',
      'Live migration over a dedicated network; VMs with NUMA spanning disabled.',
      'Runbook covers node maintenance, drain, and planned/unplanned failover.',
    ],
    technologies: ['Hyper-V', 'Windows Server Failover Cluster', 'iSCSI', 'CSV', 'PowerShell', 'Active Directory'],
    commands: [
      {
        label: 'Create the failover cluster',
        code: `Test-Cluster -Node 'HV-NODE01','HV-NODE02'
New-Cluster -Name 'CL-HV-LAB' -Node 'HV-NODE01','HV-NODE02' `
          + `-StaticAddress '10.10.10.50' -NoStorage
Set-ClusterQuorum -NodeAndFileShareMajority '\\\\DC01\\Quorum\\CL-HV-LAB'`,
      },
      {
        label: 'Live migrate a VM to the other node',
        code: `Move-VM -Name 'VM-APP01' -Node 'HV-NODE02' `
          + `-MigrationType Live -VirtualMachineMigrationTimeout 300`,
      },
    ],
  },
  {
    slug: 'dns-dhcp-lab',
    title: 'DNS & DHCP Infrastructure Lab',
    icon: FaNetworkWired,
    tagline: 'Robust name resolution and IP addressing with split-horizon DNS, DHCP failover, and reservations.',
    category: 'Networking',
    overview:
      'A DNS/DHCP infrastructure design lab implementing split-horizon DNS for internal vs external resolution, DHCP failover for high availability, and a disciplined reservation/scoping model. Includes aging/scavenging and DHCP policies for VLAN-based assignment.',
    problem:
      'Persistent name-resolution failures, IP conflicts, and an unreliable DHCP service with no redundancy. Internal clients could not resolve services that had the same name as public records.',
    solution:
      'Deployed split-horizon DNS with internal and external zones, enabled DNS aging and scavenging, configured DHCP failover in hot-standby between two servers, and implemented scope policies that assign VLAN-specific options. Documented the reservation workflow to eliminate IP conflicts.',
    architecture: [
      'Split-horizon DNS: internal zone for corp names, forwarders for the rest.',
      'DNS aging & scavenging enabled to clean stale records automatically.',
      'DHCP failover (hot-standby) between two servers per scope.',
      'Scope policies map VLAN option sets to client classes.',
      'Reservations documented for printers, servers, and static devices.',
      'Conditional forwarding for trusted partner domains.',
    ],
    technologies: ['Windows Server', 'DNS', 'DHCP', 'Active Directory-Integrated DNS', 'PowerShell', 'Networking'],
    commands: [
      {
        label: 'Configure DHCP failover',
        code: `Add-DhcpServerv4Failover `
          + `-ComputerName 'DHCP01' -PartnerServer 'DHCP02' `
          + `-Name 'FO-Corp' -ScopeId 10.20.30.0 `
          + `-MaxClientLeadTime 2:0:0 -AutoStateTransition $true `
          + `-StateSwitchInterval 4:0:0 -SharedSecret $secret `
          + `-Mode 'HotStandby' -StandbyPercent 10`,
      },
      {
        label: 'Enable DNS aging and scavenging',
        code: `Set-DnsServerScavenging -ComputerName 'DC01' `
          + `-ScavengingInterval 7.0:0:0 -RefreshInterval 6.0:0:0 `
          + `-NoRefreshInterval 6.0:0:0
Set-DnsServerResourceRecordAging -ZoneName 'corp.mohamedessam.local' `
          + `-Aging $true -RefreshInterval 6.0:0:0`,
      },
    ],
  },
  {
    slug: 'vmware-infrastructure',
    title: 'VMware Infrastructure Build',
    icon: SiVmware,
    tagline: 'ESXi host provisioning, vCenter management, and resource pools for a consolidated VM estate.',
    category: 'Virtualization',
    overview:
      'A VMware infrastructure deployment covering ESXi host installation, vCenter management, networking with distributed switches, storage on shared datastores, and resource pools for tiered workloads. Includes vMotion for zero-downtime maintenance and a snapshot discipline for safe changes.',
    problem:
      'Physical servers were underutilized, maintenance required downtime, and there was no central management or visibility across the estate.',
    solution:
      'Consolidated workloads onto ESXi hosts managed by vCenter, configured vSphere Distributed Switches for consistent networking, presented shared storage as datastores, and organized VMs into resource pools by priority. Used vMotion for maintenance and enforced a snapshot lifecycle to avoid sprawl.',
    architecture: [
      'ESXi hosts installed and joined to a vCenter Server.',
      'vSphere Distributed Switch (VDS) for consistent network config.',
      'Shared storage datastores (iSCSI/NFS) for vMotion compatibility.',
      'Resource pools: High / Normal / Low priority with CPU/mem shares.',
      'vMotion enabled for zero-downtime host maintenance.',
      'Snapshot lifecycle policy: create before change, delete within 72h.',
    ],
    technologies: ['VMware ESXi', 'vCenter Server', 'vMotion', 'VDS', 'Resource Pools', 'PowerCLI'],
    commands: [
      {
        label: 'PowerCLI: vMotion a VM to another host',
        code: `Connect-VIServer -Server 'vcenter.lab.local' -User 'admin' -Password $pwd
Move-VM -VM 'VM-APP01' -Destination 'esxi-node02.lab.local' `
          + `-Datastore 'ds-vm-prod' -VMotionPriority High`,
      },
      {
        label: 'Create a resource pool and adjust shares',
        code: `New-ResourcePool -Location 'Cluster-Prod' -Name 'RP-High' `
          + `-CpuSharesLevel High -MemSharesLevel High `
          + `-CpuExpandableReservation $true -MemExpandableReservation $true`,
      },
    ],
  },
];
