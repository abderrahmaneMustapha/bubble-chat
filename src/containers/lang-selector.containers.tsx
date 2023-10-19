import React, { useState, useEffect } from 'react';
import LanguageSelectoromponent from '../components/lang-selector.components';


type LanguageSelectorProps = {
  defaultLanguage: string;
};


const LanguageSelectorContainer: React.FC<LanguageSelectorProps> = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState(props.defaultLanguage);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageSelectoromponent
      currentLanguage={currentLanguage} 
      onLanguageChange={handleLanguageChange} 
    />
  );
};

export default LanguageSelectorContainer;