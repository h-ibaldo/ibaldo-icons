import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsWide: ForwardRefExoticComponent<ChatEqualsWideProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsWide;
export { ChatEqualsWide };
