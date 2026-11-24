import type { DefineComponent } from 'vue';

export interface NotebookSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotebookSharp: DefineComponent<NotebookSharpProps>;

export default NotebookSharp;
export { NotebookSharp };
