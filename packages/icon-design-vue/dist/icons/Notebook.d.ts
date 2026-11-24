import type { DefineComponent } from 'vue';

export interface NotebookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Notebook: DefineComponent<NotebookProps>;

export default Notebook;
export { Notebook };
