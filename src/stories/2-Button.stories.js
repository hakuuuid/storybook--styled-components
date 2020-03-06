import React from 'react';
import Button from "../components/button"
import { action } from '@storybook/addon-actions';

export default {
	title: 'Button',
	component: Button,
};

export const button = () => <Button onClick={action('clicked')}> What? </Button>