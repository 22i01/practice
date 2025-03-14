import { Typography } from '@/shared/ui/typography';
import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export function FooterMenu() {
  const { t } = useTranslation('translation');
    
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    <div className="flex flex-col gap-2">
      <Typography tag="h5">Меню</Typography>
      {MENU_ITEMS.map(({ label, href }) => (
        <Link key={href} className="text-inherit" href={href}>
          {isClient ? t(`navigation.${label}`) : ''}
        </Link>
      ))}
    </div>
  );
}
