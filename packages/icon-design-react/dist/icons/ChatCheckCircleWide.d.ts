import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleWide: ForwardRefExoticComponent<ChatCheckCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleWide;
export { ChatCheckCircleWide };
