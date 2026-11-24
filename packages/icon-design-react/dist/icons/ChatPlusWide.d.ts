import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusWide: ForwardRefExoticComponent<ChatPlusWideProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusWide;
export { ChatPlusWide };
