import { Story, Meta } from '@storybook/angular/types-6-0';
import Card from './card/card.component';

export default {
  title: 'Component/Card',
  component: Card,
} as Meta;

const Template: Story<Card> = (args: Card) => ({
  props: args,
});

export const CardDefault = Template.bind({});
CardDefault.args = {
  title: "Title Card",
  authors: ["authors"],
  pageCount: "0",
  publisher: "publisher",
  published: "published"
};