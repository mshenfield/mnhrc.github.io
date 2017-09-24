/*
  Recursively walk through child nodes, depth first
*/
function* walkChildNodes(node) {
  for(let childNode of node.childNodes) {
    yield childNode
    // Yield from
    yield* walkChildNodes(childNode)
  }
}

DEBUG = true

class Translator {
  /*
    Initialize a Translator object for a section of the page.

    translations: an object of the form
      {String-> {ISO639-2 language code -> String}}
      The keys are the trimmed original content of your text. The objects they
      point to contain a translation for each supported language.  The format is
      convenient from our standpoint - we have a small number of languages
      and generaelly want to support all of them if we add a snippet of text.
      Example:
        <span>   hello world </span>
        {
          "hello world": {
            "en": "hello world",
            "es": "Hola Mundo",
            "ar": "مرحبا بالعالم"
          }
        }
    root (default=document.body): only children of the root will have their text
      translated
  */
  constructor(translations, root=document.body) {
    this._translations = translations
    this._root = root
    this._indexTextNodes()
  }

  /*
    Create an index mapping text nodes to their original text. Use the trimmed
    value as translations keys.
  */
  _indexTextNodes() {
    this._index = new Map()
    for(const node of walkChildNodes(this._root)) {
      // Add to map if it is a text node
      if (node.nodeType === Node.TEXT_NODE) {
        const translationKey = node.nodeValue.trim()
        if (translationKey) {
          this._index.set(node, translationKey)
        }
      }
    }
  }

  /*
    Switch to a given language

    lang (default='en'): the ISO639-2 language code
  */
  switch(lang) {
    for(const [textNode, translationKey] of this._index.entries()) {
      if (
        this._translations[translationKey] &&
        this._translations[translationKey][lang]
      ) {
        textNode.nodeValue = this._translations[translationKey][lang]
      } else {
        if (DEBUG) {
          console.warn(`Translator: Translation failed for key "${translationKey}" with language "${lang}"`)
        }
      }
    }
  }
}

TRANSLATIONS = {
  'wESL (We ESL) is a platform for easily finding ESL (English as a Second Language) classes in Nashville, TN. All organizations that offer ESL classes are listed on the map. You can click on the map location for more information about the organizations and the classes they offer. If you would like your organization\'s classes to be added to the platform, click on the link the in the left column titled "Submission Form."': {
    'en': 'wESL (We ESL) is a platform for easily finding ESL (English as a Second Language) classes in Nashville, TN. All organizations that offer ESL classes are listed on the map. You can click on the map location for more information about the organizations and the classes they offer. If you would like your organization\'s classes to be added to the platform, click on the link the in the left column titled "Submission Form."',
    'es': '',
    'ar': ''
  },
  'The wESL platform is offered and maintained by the Metro Human Relations Commission. If you have any questions, please email us at': {
    'en': 'The wESL platform is offered and maintained by the Metro Human Relations Commission. If you have any questions, please email us at ',
    'es': '',
    'ar': ''
  },
  'and follow': {
    'en': ' and follow ',
    'es': '',
    'ar': ''
  },
  'on Twitter for updates about the platform.': {
    'en': ' on Twitter for updates about the platform.',
    'es': '',
    'ar': ''
  },
  'For more info about the Metro Human Relations Commission, please visit ': {
    'en': 'For more info about the Metro Human Relations Commission, please visit ',
    'es': '',
    'ar': ''
  },
  ', or': {
    'en': ', or ',
    'es': '',
    'ar': ''
  },
  'Davidson County English Language Courses': {
    'en': 'Davidson County English Language Courses',
    'es': '',
    'ar': ''
  },
  'Next 30 Days': {
    'en': 'Next 30 Days',
    'es': '',
    'ar': ''
  },
  '30 - 60 Days': {
    'en': '30 - 60 Days',
    'es': '',
    'ar': ''
  },
  '60 - 90 Days': {
    'en': '60 - 90 Days',
    'es': '',
    'ar': ''
  },
  'Any': {
    'en': 'Any',
    'es': '',
    'ar': ''
  },
  'Semester': {
    'en': 'Semester',
    'es': '',
    'ar': ''
  },
  'Trimester': {
    'en': 'Trimester',
    'es': '',
    'ar': ''
  },
  'Quarterly': {
    'en': 'Quarterly',
    'es': '',
    'ar': ''
  },
  'Ongoing': {
    'en': 'Ongoing',
    'es': '',
    'ar': ''
  },
  'Any': {
    'en': 'Any',
    'es': '',
    'ar': ''
  },
  'Pre-Literate': {
    'en': 'Pre-Literate',
    'es': '',
    'ar': ''
  },
  'Intro': {
    'en': 'Intro',
    'es': '',
    'ar': ''
  },
  'Level 1': {
    'en': 'Level 1',
    'es': '',
    'ar': ''
  },
  'Level 2': {
    'en': 'Level 2',
    'es': '',
    'ar': ''
  },
  'Level 3': {
    'en': 'Level 3',
    'es': '',
    'ar': ''
  },
  'Level 4': {
    'en': 'Level 4',
    'es': '',
    'ar': ''
  },
  'Level 5': {
    'en': 'Level 5',
    'es': '',
    'ar': ''
  },
  'Conversation': {
    'en': 'Conversation',
    'es': '',
    'ar': ''
  },
  'GED': {
    'en': 'GED',
    'es': '',
    'ar': ''
  },
  'Citizenship': {
    'en': 'Citizenship',
    'es': '',
    'ar': ''
  },
  'Any': {
    'en': 'Any',
    'es': '',
    'ar': ''
  },
  'Free': {
    'en': 'Free',
    'es': '',
    'ar': ''
  },
  '$10': {
    'en': '$10',
    'es': '',
    'ar': ''
  },
  '$20': {
    'en': '$20',
    'es': '',
    'ar': ''
  },
  '$30': {
    'en': '$30',
    'es': '',
    'ar': ''
  },
  '$40': {
    'en': '$40',
    'es': '',
    'ar': ''
  },
  '$50': {
    'en': '$50',
    'es': '',
    'ar': ''
  },
  '$60+': {
    'en': '$60+',
    'es': '',
    'ar': ''
  },
  'To submit a class click': {
    'en': 'To submit a class click ',
    'es': '',
    'ar': ''
  },
  'here.': {
    'en': 'here.',
    'es': '',
    'ar': ''
  },
  'About this App': {
    'en': 'About this App',
    'es': 'Como el appo',
    'ar': ''
  },
  '< Back to Locations': {
    'en': '< Back to Locations',
    'es': '',
    'ar': ''
  },
  'Classes held at:': {
    'en': 'Classes held at:',
    'es': '',
    'ar': ''
  },
  'Class': {
    'en': 'Class',
    'es': '',
    'ar': ''
  },
  'Date': {
    'en': 'Date',
    'es': '',
    'ar': ''
  },
  'Schedule': {
    'en': 'Schedule',
    'es': '',
    'ar': ''
  },
  'Curriculum': {
    'en': 'Curriculum',
    'es': '',
    'ar': ''
  },
  'Fee': {
    'en': 'Fee',
    'es': '',
    'ar': ''
  },
  '< Back to Search': {
    'en': '< Back to Search',
    'es': '',
    'ar': ''
  },
  'Locations': {
    'en': 'Locations',
    'es': '',
    'ar': ''
  }
}

let translator;
document.addEventListener('DOMContentLoaded', function() {
  translator = new Translator(TRANSLATIONS)
})
