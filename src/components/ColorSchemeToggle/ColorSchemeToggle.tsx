import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  HoverCard,
} from '@mantine/core';
import cx from 'clsx';
import SunIcon from '../../Assets/SunIcon.svg?react';
import MoonIcon from '../../Assets/MoonIcon.svg?react';

import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HoverCard shadow="md" withArrow openDelay={200}>
      <HoverCard.Target>
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="transparent"
          color={computedColorScheme === 'dark' ? 'yellow' : 'dark'}
          size="lg"
          aria-label="Toggle color scheme"
        >
          <SunIcon className={cx(classes.icon, classes.light)} />
          <MoonIcon className={cx(classes.icon, classes.dark)} />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        Toggle {computedColorScheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
