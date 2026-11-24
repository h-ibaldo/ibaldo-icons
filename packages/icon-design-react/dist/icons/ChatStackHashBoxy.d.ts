import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashBoxy: ForwardRefExoticComponent<ChatStackHashBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashBoxy;
export { ChatStackHashBoxy };
