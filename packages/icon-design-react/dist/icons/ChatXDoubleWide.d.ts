import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleWide: ForwardRefExoticComponent<ChatXDoubleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleWide;
export { ChatXDoubleWide };
