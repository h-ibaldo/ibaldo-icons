import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckBoxy: ForwardRefExoticComponent<ChatStackCheckBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckBoxy;
export { ChatStackCheckBoxy };
