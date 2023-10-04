import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mui/material'

const Navbar = () => {
    return (
        <div className='tw flex justify-between'>
            <div className='tw flex justify-between'>
                <Link href='/'>
                    <Image src="/leetcode.svg" width={24} height={24} />
                </Link>
                <ul className='tw flex'>
                    <li>Explore</li>
                    <li>Problems</li>
                    <li>Contest</li>
                    <li>Discuss</li>
                    <li>Interview</li>
                    <li>Store</li>
                </ul>
            </div>
            <div>
                <Button>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Navbar
