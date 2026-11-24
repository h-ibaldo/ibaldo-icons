import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashSlant: ForwardRefExoticComponent<ChatStackHashSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashSlant;
export { ChatStackHashSlant };
