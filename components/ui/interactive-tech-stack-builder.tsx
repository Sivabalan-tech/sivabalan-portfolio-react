"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, useAnimation, AnimatePresence, useMotionValue, useMotionTemplate, MotionValue } from "framer-motion";

const IconUser = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconReact = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
  </svg>
);

const IconNext = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
  </svg>
);

const IconThree = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"></path>
  </svg>
);

const IconFramer = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
  </svg>
);

const IconCss = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
  </svg>
);

const IconPython = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
  </svg>
);

const IconJava = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.045 3.776-.894 3.776-.894M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.926 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.562 1.391-3.679.639-8.239.565-10.937.155 0-.001.552.455 3.383.652"></path>
  </svg>
);

const IconFastAPI = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
);

const IconTensorFlow = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.293 11.293l1.414 1.414L12 3.414l9.293 9.293 1.414-1.414L12 .586 1.293 11.293zm0 8l1.414 1.414L12 11.414l9.293 9.293 1.414-1.414L12 8.586 1.293 19.293z"></path>
  </svg>
);

const IconGit = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-1.345-.607-2.054-.196l-2.507 2.507c.062.647-.193 1.318-.719 1.844-.721.721-1.883.721-2.6 0-.719-.719-.719-1.883 0-2.6.541-.541 1.313-.608 2.055-.196l2.456-2.456c-.645-.416-.973-1.174-.816-1.937L8.95 5.782l-7.454 7.453c-.6.605-.6 1.586 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582.004-2.187"></path>
  </svg>
);

const IconSQL = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 3.34 2 5v4c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 6c-5.52 0-10-1.34-10-3s4.48-3 10-3 10 1.34 10 3-4.48 3-10 3zm0 4c-5.52 0-10-1.34-10-3v4c0 1.66 4.48 3 10 3s10-1.34 10-3v-4c0 1.66-4.48 3-10 3zm0 6c-5.52 0-10-1.34-10-3v4c0 1.66 4.48 3 10 3s10-1.34 10-3v-4c0 1.66-4.48 3-10 3z"></path>
  </svg>
);

const IconTailwind = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
  </svg>
);

const IconNLP = ({ className, size }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
  </svg>
);

const GRID_CONSTANTS = {
  STUD_WIDTH: 55,
  ROW_HEIGHT: 70,
  MAX_ROWS: 20,
  COLS: 8,
  APEX_HEIGHT: 150,
};

const STUD_THEMES = {
  green: {
    wall: "linear-gradient(90deg, #087028 0%, #10923b 20%, #1ab84d 38%, #20cc55 50%, #1ab84d 62%, #10923b 80%, #087028 100%)",
    cap: "linear-gradient(135deg, #42f585 0%, #25dd62 40%, #18c04e 70%, #10a040 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,40,0,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  dark: {
    wall: "linear-gradient(90deg, #09090b 0%, #18181b 20%, #27272a 38%, #3f3f46 50%, #27272a 62%, #18181b 80%, #09090b 100%)",
    cap: "linear-gradient(135deg, #52525b 0%, #3f3f46 40%, #27272a 70%, #18181b 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.2)",
  },
  yellow: {
    wall: "linear-gradient(90deg, #a16207 0%, #ca8a04 20%, #eab308 38%, #facc15 50%, #eab308 62%, #ca8a04 80%, #a16207 100%)",
    cap: "linear-gradient(135deg, #fef08a 0%, #fde047 40%, #eab308 70%, #ca8a04 100%)",
    shadow: "radial-gradient(ellipse, rgba(80,50,0,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  blue: {
    wall: "linear-gradient(90deg, #1e3a8a 0%, #1d4ed8 20%, #2563eb 38%, #3b82f6 50%, #2563eb 62%, #1d4ed8 80%, #1e3a8a 100%)",
    cap: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 40%, #3b82f6 70%, #2563eb 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,0,80,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  red: {
    wall: "linear-gradient(90deg, #7f1d1d 0%, #b91c1c 20%, #dc2626 38%, #ef4444 50%, #dc2626 62%, #b91c1c 80%, #7f1d1d 100%)",
    cap: "linear-gradient(135deg, #fca5a5 0%, #f87171 40%, #ef4444 70%, #dc2626 100%)",
    shadow: "radial-gradient(ellipse, rgba(80,0,0,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
};

type StudColor = keyof typeof STUD_THEMES;

const LegoStud = ({ color = "green", yOffset = 0 }: { color?: StudColor; yOffset?: number }) => {
  const t = STUD_THEMES[color];
  const studHeight = 16;
  const studWidth = 72;
  const studCapHeight = 16;

  return (
    <div className="flex-1 flex items-end justify-center relative" style={{ transform: `translateY(${yOffset}px)` }}>
      <div
        className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[75%] rounded-[50%] z-0"
        style={{ height: "10px", background: t.shadow }}
      />

      <div className="relative z-10" style={{ width: `${studWidth}%`, maxWidth: "42px", marginBottom: "-1px" }}>
        <div
          className="w-full relative overflow-hidden"
          style={{ height: `${studHeight}px`, borderRadius: "50% / 20%", background: t.wall }}
        >
          <div
            className="absolute top-0 h-full w-[25%] left-[20%]"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)" }}
          />
        </div>

        <div
          className="absolute left-0 w-full rounded-[50%] flex items-center justify-center overflow-hidden"
          style={{
            top: `-${studCapHeight / 2}px`,
            height: `${studCapHeight}px`,
            background: t.cap,
            boxShadow: `inset 0px 2px 4px rgba(255,255,255,0.6), inset 0px -2px 4px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.4)`,
            borderTop: `1px solid ${t.rim}`,
          }}
        >
          <span
            className="text-[10px] font-black tracking-widest select-none pointer-events-none opacity-80"
            style={{
              color: "rgba(0,0,0,0.15)",
              textShadow: "0px 1px 0px rgba(255,255,255,0.6)",
              transform: "scaleY(0.55) translateY(-1px)",
            }}
          >
            UI
          </span>
        </div>
      </div>
    </div>
  );
};

interface LegoBlockProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  topColor: string;
  faceGradient: string;
  bottomColor: string;
  topHeight?: number;
  bottomHeight?: number;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  className?: string;
  children: React.ReactNode;
  studs?: number;
  studColor?: StudColor;
  hideStuds?: boolean | number[];
  studYOffset?: number;
}

const LegoBlock = ({
  mouseX,
  mouseY,
  topColor,
  faceGradient,
  bottomColor,
  topHeight = 19,
  bottomHeight = 15,
  roundedTop = false,
  roundedBottom = false,
  className = "",
  children,
  studs = 0,
  studColor = "green",
  hideStuds = false,
  studYOffset = 12,
}: LegoBlockProps) => {
  const topDarkenEnd = 100;
  const topShadow = "inset 0px 0px 4px rgba(0,0,0,0.28)";
  const faceShadow = "inset 0px 2px 6px rgba(255,255,255,0.47)";

  const highlightBg = useMotionTemplate`radial-gradient(circle 120px at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.25), transparent)`;

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative w-full"
        style={{
          height: `${topHeight}px`,
          background: `linear-gradient(to bottom, ${topColor}, color-mix(in srgb, ${topColor} ${topDarkenEnd}%, black))`,
          boxShadow: topShadow,
          borderRadius: roundedTop ? "4px 4px 0 0" : "0",
        }}
      >
        {studs > 0 && (
          <div className="absolute bottom-full left-0 w-full flex">
            {[...Array(studs)].map((_, i) => {
              const isHidden = Array.isArray(hideStuds) ? hideStuds.includes(i) : hideStuds;
              return isHidden ? (
                <div key={i} className="flex-1" />
              ) : (
                <LegoStud key={i} color={studColor} yOffset={studYOffset} />
              );
            })}
          </div>
        )}
      </div>
      <div
        className="relative w-full border-x border-black/5 overflow-hidden"
        style={{
          background: faceGradient,
          boxShadow: faceShadow,
        }}
      >
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none opacity-60"
          style={{
            background: highlightBg,
          }}
        />
        <div className="relative z-30">{children}</div>
      </div>
      <div
        className="relative w-full"
        style={{
          height: `${bottomHeight}px`,
          background: bottomColor,
          boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.15)",
          borderRadius: roundedBottom ? "0 0 4px 4px" : "0",
        }}
      />
    </div>
  );
};

const MODULES = [
  {
    id: "python",
    name: "Python",
    desc: "Backend & AI",
    icon: IconPython,
    studs: 4,
    colors: {
      topColor: "#3776ab",
      faceGradient: "linear-gradient(180deg, #ffd43b 0%, #f4c430 50%, #e6b800 100%)",
      bottomColor: "#d4a017",
      studColor: "yellow" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-yellow-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "java",
    name: "Java",
    desc: "Enterprise",
    icon: IconJava,
    studs: 4,
    colors: {
      topColor: "#f89820",
      faceGradient: "linear-gradient(180deg, #5382a1 0%, #4a6fa5 50%, #3d5c8a 100%)",
      bottomColor: "#2d4a6f",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-blue-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "fastapi",
    name: "FastAPI",
    desc: "REST APIs",
    icon: IconFastAPI,
    studs: 3,
    colors: {
      topColor: "#009688",
      faceGradient: "linear-gradient(180deg, #059669 0%, #047857 50%, #065f46 100%)",
      bottomColor: "#064e3b",
      studColor: "green" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-emerald-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    desc: "Frontend",
    icon: IconReact,
    studs: 4,
    colors: {
      topColor: "#f7df1e",
      faceGradient: "linear-gradient(180deg, #f0db4f 0%, #e8c847 50%, #d4b835 100%)",
      bottomColor: "#c9a828",
      studColor: "yellow" as StudColor,
      text: "text-black drop-shadow-md",
      subtext: "text-yellow-900",
      iconBg: "bg-black/10 shadow-inner",
      iconColor: "text-black drop-shadow-sm",
    },
  },
  {
    id: "sql",
    name: "SQL",
    desc: "Database",
    icon: IconSQL,
    studs: 3,
    colors: {
      topColor: "#00758f",
      faceGradient: "linear-gradient(180deg, #008fb5 0%, #006b8a 50%, #00556f 100%)",
      bottomColor: "#004458",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-cyan-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "tailwind",
    name: "Tailwind",
    desc: "CSS Framework",
    icon: IconTailwind,
    studs: 2,
    colors: {
      topColor: "#38bdf8",
      faceGradient: "linear-gradient(180deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",
      bottomColor: "#075985",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-sky-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    desc: "ML Framework",
    icon: IconTensorFlow,
    studs: 4,
    colors: {
      topColor: "#ff6f00",
      faceGradient: "linear-gradient(180deg, #f44336 0%, #e53935 50%, #c62828 100%)",
      bottomColor: "#b71c1c",
      studColor: "red" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-red-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "git",
    name: "Git",
    desc: "Version Control",
    icon: IconGit,
    studs: 2,
    colors: {
      topColor: "#f05032",
      faceGradient: "linear-gradient(180deg, #e44d26 0%, #d03e1f 50%, #b8321a 100%)",
      bottomColor: "#9e2a16",
      studColor: "red" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-orange-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "nlp",
    name: "NLP",
    desc: "AI Processing",
    icon: IconNLP,
    studs: 3,
    colors: {
      topColor: "#9c27b0",
      faceGradient: "linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",
      bottomColor: "#38006b",
      studColor: "red" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-purple-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "css",
    name: "CSS",
    desc: "Styling",
    icon: IconCss,
    studs: 2,
    colors: {
      topColor: "#264de4",
      faceGradient: "linear-gradient(180deg, #2965f1 0%, #1e4db7 50%, #164094 100%)",
      bottomColor: "#0d2c7a",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-blue-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "react",
    name: "React",
    desc: "UI Library",
    icon: IconReact,
    studs: 4,
    colors: {
      topColor: "#61dafb",
      faceGradient: "linear-gradient(180deg, #21a0f5 0%, #0d8ed8 50%, #0b7abd 100%)",
      bottomColor: "#0963a0",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-sky-100",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
];

const ModuleBlock = ({
  module,
  hiddenStuds = [],
  onClick,
  isAnimating,
  startRect,
  mouseX,
  mouseY,
  onAnimationComplete,
}: {
  module: (typeof MODULES)[0];
  hiddenStuds?: number[];
  onClick: (e: React.MouseEvent) => void;
  isAnimating?: boolean;
  startRect?: DOMRect | null;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  onAnimationComplete?: () => void;
}) => {
  const widthPx = module.studs * GRID_CONSTANTS.STUD_WIDTH;
  const isCompact = module.studs <= 2;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnimating && startRect && wrapperRef.current) {
      const endRect = wrapperRef.current.getBoundingClientRect();
      const dx = startRect.left - endRect.left;
      const dy = startRect.top - endRect.top;

      const apexY = Math.min(dy, 0) - GRID_CONSTANTS.APEX_HEIGHT;

      const animation = wrapperRef.current.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(1, 1)`, filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))", offset: 0 },
          { transform: `translate(${dx}px, ${dy}px) scale(1.1, 0.85)`, filter: "drop-shadow(0px 5px 5px rgba(0,0,0,0.3))", offset: 0.15 },
          { transform: `translate(${dx * 0.75}px, ${dy + (apexY - dy) * 0.5}px) scale(0.9, 1.15)`, filter: "drop-shadow(0px 30px 20px rgba(0,0,0,0.05))", offset: 0.35 },
          { transform: `translate(${dx * 0.5}px, ${apexY}px) scale(1, 1)`, filter: "drop-shadow(0px 40px 20px rgba(0,0,0,0))", offset: 0.55 },
          { transform: `translate(${dx * 0.25}px, ${apexY * 0.5}px) scale(0.9, 1.15)`, filter: "drop-shadow(0px 30px 20px rgba(0,0,0,0.05))", offset: 0.75 },
          { transform: `translate(0px, 0px) scale(1.15, 0.85)`, filter: "drop-shadow(0px 5px 5px rgba(0,0,0,0.3))", offset: 0.9 },
          { transform: `translate(0px, 0px) scale(1, 1)`, filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))", offset: 1 },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "both",
        }
      );

      animation.onfinish = () => onAnimationComplete?.();

      return () => animation.cancel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating, startRect]);

  return (
    <div ref={wrapperRef} className="z-50 relative lego-block-wrapper" style={{ width: widthPx }}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Equip ${module.name}`}
        className="cursor-pointer w-full shrink-0 touch-none group relative focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ccff00] rounded-lg hover:-translate-y-1.5 active:scale-95 transition-all duration-200 text-left"
      >
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-30 rounded-lg pointer-events-none" />
        <LegoBlock
          mouseX={mouseX}
          mouseY={mouseY}
          topColor={module.colors.topColor}
          faceGradient={module.colors.faceGradient}
          bottomColor={module.colors.bottomColor}
          roundedTop
          roundedBottom
          studs={module.studs}
          studColor={module.colors.studColor}
          hideStuds={hiddenStuds}
        >
          <div className={`flex items-center w-full h-[60px] ${isCompact ? "px-3 gap-2.5" : "px-4 gap-3"}`}>
            {isCompact ? (
              <>
                <div className={`w-7 h-7 rounded-md ${module.colors.iconBg} flex items-center justify-center shrink-0`}>
                  <module.icon className={module.colors.iconColor} size={18} />
                </div>
                <h4 className="font-sans font-bold text-white text-[15px] tracking-wide truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{module.name}</h4>
              </>
            ) : (
              <>
                <div className={`w-9 h-9 rounded-lg ${module.colors.iconBg} flex items-center justify-center shrink-0`}>
                  <module.icon className={module.colors.iconColor} size={24} />
                </div>
                <h4 className="font-sans font-bold text-white text-[17px] tracking-wide truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{module.name}</h4>
              </>
            )}
          </div>
        </LegoBlock>
      </button>
    </div>
  );
};

export interface LegoOnboardingProps {
  modules?: typeof MODULES;
  onComplete?: (stack: typeof MODULES) => void;
  onSkip?: () => void;
  className?: string;
}

export default function LegoOnboarding({ modules = MODULES, onComplete, onSkip, className = "" }: LegoOnboardingProps = {}) {
  const [equippedIds, setEquippedIds] = useState<string[]>([]);
  const [animatingBlocks, setAnimatingBlocks] = useState<Record<string, DOMRect>>({});

  const controls = useAnimation();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handlePointerMove = (e: React.PointerEvent) => {
    mouseX.set((e.clientX / window.innerWidth) * 100);
    mouseY.set((e.clientY / window.innerHeight) * 100);
  };

  const handleToggleEquip = (id: string, e: React.MouseEvent) => {
    if (animatingBlocks[id]) return;

    const el = (e.currentTarget as HTMLElement).closest(".lego-block-wrapper");
    if (!el) return;
    const startRect = el.getBoundingClientRect();

    setAnimatingBlocks((prev) => ({ ...prev, [id]: startRect }));

    setEquippedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });

    setTimeout(() => {
      controls.start({ y: [0, 10, -3, 0], transition: { duration: 0.4, times: [0, 0.4, 0.7, 1], ease: "easeInOut" } });
    }, 1080);
  };

  const equippedModules = equippedIds.map((id) => modules.find((m) => m.id === id)!);
  const unequippedModules = modules.filter((m) => !equippedIds.includes(m.id));

  const { grid, positionedModules } = useMemo(() => {
    const calculatedGrid: (string | null)[][] = [];
    const positioned = equippedModules.map((m) => {
      let placedRow = -1;
      let placedCol = -1;
      for (let r = 0; r < GRID_CONSTANTS.MAX_ROWS; r++) {
        if (!calculatedGrid[r]) calculatedGrid[r] = Array(GRID_CONSTANTS.COLS).fill(null);
        let contiguous = 0;
        for (let c = 0; c < GRID_CONSTANTS.COLS; c++) {
          if (!calculatedGrid[r][c]) {
            contiguous++;
            if (contiguous === m.studs) {
              placedRow = r;
              placedCol = c - m.studs + 1;
              break;
            }
          } else {
            contiguous = 0;
          }
        }
        if (placedRow !== -1) break;
      }
      if (placedRow !== -1) {
        for (let i = 0; i < m.studs; i++) {
          calculatedGrid[placedRow][placedCol + i] = m.id;
        }
      } else {
        placedRow = 0;
        placedCol = 0;
      }
      return { module: m, rowIndex: placedRow, colIndex: placedCol };
    });
    return { grid: calculatedGrid, positionedModules: positioned };
  }, [equippedModules]);

  const hiddenServerStuds: number[] = [];
  if (grid[0]) {
    grid[0].forEach((occupantId, idx) => {
      if (occupantId && !animatingBlocks[occupantId]) hiddenServerStuds.push(idx);
    });
  }

  const towerHeight =
    equippedModules.length > 0 ? (Math.max(...positionedModules.map((m) => m.rowIndex)) + 1) * GRID_CONSTANTS.ROW_HEIGHT : 0;

  return (
    <div onPointerMove={handlePointerMove} className={`w-full min-h-screen relative overflow-hidden select-none font-sans flex flex-col ${className}`}>
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative z-10 pt-28 lg:pt-10 pb-8 px-8 overflow-y-auto w-full">
        <div className="flex-1 w-full max-w-[500px] flex flex-col justify-center">
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 relative z-20 min-h-[200px]">
            {unequippedModules.map((module) => {
              const startRect = animatingBlocks[module.id];
              return (
                <ModuleBlock
                  key={module.id}
                  module={module}
                  mouseX={mouseX}
                  mouseY={mouseY}
                  isAnimating={!!startRect}
                  startRect={startRect || null}
                  onAnimationComplete={() => {
                    setAnimatingBlocks((prev) => {
                      const next = { ...prev };
                      delete next[module.id];
                      return next;
                    });
                  }}
                  onClick={(e) => handleToggleEquip(module.id, e)}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 w-full lg:w-auto mt-16 lg:mt-0">
          <div className="scale-[0.75] sm:scale-[0.8] lg:scale-100 origin-bottom shrink-0 flex flex-col items-center">
            <motion.div
              animate={controls}
              className="relative w-[390px] shadow-[0_15px_35px_rgba(0,0,0,0.25)] rounded-xl transition-all duration-700 ease-out"
              style={{ marginTop: `${towerHeight}px` }}
            >
              <div className="absolute left-0 w-full h-0 z-20" style={{ bottom: "calc(100% - 14px)" }}>
                {positionedModules.map(({ module, rowIndex, colIndex }) => {
                  const hiddenLocalStuds: number[] = [];
                  if (grid[rowIndex + 1]) {
                    for (let i = 0; i < module.studs; i++) {
                      const occupantId = grid[rowIndex + 1][colIndex + i];
                      if (occupantId && !animatingBlocks[occupantId]) {
                        hiddenLocalStuds.push(i);
                      }
                    }
                  }

                  const startRect = animatingBlocks[module.id];

                  return (
                    <div
                      key={module.id}
                      className="absolute"
                      style={{
                        bottom: rowIndex * GRID_CONSTANTS.ROW_HEIGHT,
                        left: colIndex * GRID_CONSTANTS.STUD_WIDTH,
                        zIndex: rowIndex * 10,
                      }}
                    >
                      <ModuleBlock
                        module={module}
                        hiddenStuds={hiddenLocalStuds}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        isAnimating={!!startRect}
                        startRect={startRect || null}
                        onAnimationComplete={() => {
                          setAnimatingBlocks((prev) => {
                            const next = { ...prev };
                            delete next[module.id];
                            return next;
                          });
                        }}
                        onClick={(e) => handleToggleEquip(module.id, e)}
                      />
                    </div>
                  );
                })}
              </div>

              <LegoBlock
                mouseX={mouseX}
                mouseY={mouseY}
                topColor="#eab308"
                faceGradient="linear-gradient(180deg, #facc15 0%, #eab308 50%, #ca8a04 100%)"
                bottomColor="#a16207"
                roundedTop
                roundedBottom
                studs={8}
                studColor="yellow"
                hideStuds={hiddenServerStuds}
                className="relative z-10"
              >
                <div className="px-5 py-4 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center shadow-inner shrink-0">
                      <IconUser className="w-6 h-6 text-white drop-shadow-md" size={24} />
                    </div>
                    <div className="text-white drop-shadow-md">
                      <h3 className="font-sans font-bold text-[17px] tracking-wide truncate drop-shadow-md">My Profile</h3>
                      <p className="font-mono text-[10px] font-bold text-yellow-100/90 tracking-[0.2em] uppercase mt-1.5 drop-shadow-sm">
                        {equippedModules.length === 0 ? "Select technologies" : `Level: ${equippedModules.length * 10}XP`}
                      </p>
                    </div>
                  </div>
                </div>
              </LegoBlock>
            </motion.div>
          </div>

          <div className="h-24 w-full flex flex-col items-center justify-start mt-4 gap-3">
            <AnimatePresence>
              {equippedModules.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-zinc-900 text-white font-medium tracking-wide rounded-xl shadow-lg hover:bg-zinc-800 transition-colors duration-200"
                  onClick={() =>
                    onComplete
                      ? onComplete(equippedModules)
                      : alert(
                          `Onboarding complete!\nStack: ${equippedModules.map((m) => m.name).join(" + ")}`
                        )
                  }
                >
                  Continue →
                </motion.button>
              )}
            </AnimatePresence>

            {onSkip && (
              <button
                onClick={onSkip}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest mt-2"
              >
                Skip for now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { LegoOnboarding as Component };
