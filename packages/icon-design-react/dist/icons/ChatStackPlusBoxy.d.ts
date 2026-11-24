import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusBoxy: ForwardRefExoticComponent<ChatStackPlusBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusBoxy;
export { ChatStackPlusBoxy };
