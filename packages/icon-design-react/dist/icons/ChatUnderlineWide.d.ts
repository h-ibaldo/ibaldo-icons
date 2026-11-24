import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineWide: ForwardRefExoticComponent<ChatUnderlineWideProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineWide;
export { ChatUnderlineWide };
