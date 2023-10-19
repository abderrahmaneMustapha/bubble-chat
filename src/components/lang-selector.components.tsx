import React from 'react';

type LanguageSelectorProps = {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
};

const LanguageSelectorComponent: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div>
      <select value={currentLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSelectorComponent;