import { Story, Meta } from '@storybook/angular/types-6-0';
import Paginated from './paginated/paginated.component';

export default {
  title: 'Component/Paginated',
  component: Paginated,
} as Meta;

const Template: Story<Paginated> = (args: Paginated) => ({
  props: args,
});

export const PaginatedDefault = Template.bind({});
PaginatedDefault.args = {
    currentPage: 0,
    total: 0
};

PaginatedDefault.argTypes = {
  _totalPage: {  table: { disable: true } },
  checkNextChange: {  table: { disable: true } },
  checkPrevChange: {  table: { disable: true } },
  next: {  table: { disable: true } },
  prev: {  table: { disable: true } },
}