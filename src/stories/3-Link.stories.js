import React from 'react';
import Link from "../components/link";
import {action} from "@storybook/addon-actions";

export default {
	title: 'Link',
	component: Link,
};

export const links = () => <Link onClick={action("clicked")}> Fuck uuu </Link>