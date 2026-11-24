import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXBoxy: ForwardRefExoticComponent<ChatStackXBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXBoxy;
export { ChatStackXBoxy };
