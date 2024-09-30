import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const PrimaryLongName: Story = {
    args: {
        ...Primary.args,
        label: 'Primary with a really long name',
    },
};

export const OnDark: Story = {
    // 👇 Story-level parameters
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};