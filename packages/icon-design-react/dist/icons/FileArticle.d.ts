import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArticleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArticle: ForwardRefExoticComponent<FileArticleProps & RefAttributes<SVGSVGElement>>;

export default FileArticle;
export { FileArticle };
