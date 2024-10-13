import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className="flex gap-2 text-white text-lg">
            <Link href="/" className="bg-primary  py-1 px-4">
                DocSynk
            </Link>
            <p className='flex items-center bg-primary  animate-blink-cursor'>|</p>
        </div>

    )
}

export default Logo