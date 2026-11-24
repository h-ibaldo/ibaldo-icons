import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckWide: ForwardRefExoticComponent<ChatCheckWideProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckWide;
export { ChatCheckWide };
