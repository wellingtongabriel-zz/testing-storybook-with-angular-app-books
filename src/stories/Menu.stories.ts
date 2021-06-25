import { Story, Meta } from '@storybook/angular/types-6-0';
import Menu from './menu/menu.component';

export default {
  title: 'Component/Menu',
  component: Menu,
} as Meta;

const Template: Story<Menu> = (args: Menu) => ({
  props: args,
});

export const MenuDefault = Template.bind({});
MenuDefault.args = {
  userName: "",
};

MenuDefault.argTypes = {
  logout: {  table: { disable: true } },
}