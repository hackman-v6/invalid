import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [

  {
    title: 'Dao',
    description: 'Our blockchain-based DAO streamlines fund management, automating secure transactions and accelerating fund distribution.',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'User-Friendly',
    description: 'Our user-friendly platform prioritizes convenience, simplicity, and accessibility for effortless crowdfunding engagement.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Investor Participation',
    description: 'Our project redefines crowdfunding, giving investors a voice in project selection and resource allocation through our DAO structure.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Simplified Fund Management',
    description: 'Our DAO simplifies fund management with secure transactions and efficient resource allocation, ensuring swift delivery of funds.',
    icon: <LocalLibraryIcon />,
  },

]
