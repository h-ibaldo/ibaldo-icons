import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappyWide: ForwardRefExoticComponent<ChatHappyWideProps & RefAttributes<SVGSVGElement>>;

export default ChatHappyWide;
export { ChatHappyWide };
