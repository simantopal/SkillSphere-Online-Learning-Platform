import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isAcitve = href === pathname;
    return (
        <Link href={href} className={`${isAcitve ? "text-primary" : ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;