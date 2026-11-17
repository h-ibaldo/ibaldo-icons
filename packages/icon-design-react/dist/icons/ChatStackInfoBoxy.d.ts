import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoBoxy: ForwardRefExoticComponent<ChatStackInfoBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoBoxy;
export { ChatStackInfoBoxy };
