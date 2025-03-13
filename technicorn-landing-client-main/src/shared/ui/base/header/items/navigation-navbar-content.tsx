import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export function NavigationNavbarContent() {
  const { t } = useTranslation('translation');
  
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {MENU_ITEMS.map(({ label, href }) => (
        <NavbarItem key={href} isActive={href === pathname}>
          <Link color="foreground" href={href}>
          {t(`navigation.${label}`)}  
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
