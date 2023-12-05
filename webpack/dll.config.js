module.exports = {
    library: {
      mobx: ['mobx'],
      react: ['react', 'react-dom', 'react-router-dom'],
      mui: [
        '@mui/icons-material',
        '@mui/lab',
        '@mui/material',
        '@mui/x-date-pickers',
        '@mui/styled-engine-sc',
      ],
      plate: [
        '@udecode/plate',
        '@udecode/plate-core',
      ],
      draftJs: [
        'draft-js',
        '@draft-js-plugins/divider',
        '@draft-js-plugins/drag-n-drop',
        '@draft-js-plugins/editor',
        '@draft-js-plugins/focus',
        '@draft-js-plugins/image',
        '@draft-js-plugins/linkify',
        '@draft-js-plugins/mention',
        '@draft-js-plugins/resizeable',
        '@draft-js-plugins/static-toolbar',
        '@draft-js-plugins/undo',
        'draft-js-autolist-plugin', 
        'draft-js-export-html', 
        'draft-js-import-html',
        'markdown-draft-js'
      ],
      tiny: ['tinymce', '@tinymce/tinymce-react'],
      visx: [
        '@visx/axis',
        '@visx/event',
        '@visx/grid',
        '@visx/group',
        '@visx/legend',
        '@visx/scale',
        '@visx/shape',
        '@visx/tooltip',
        '@visx/xychart',
      ],
      slate: [
        'slate', 
        'slate-history',
        'slate-hyperscript',
        'slate-react'
      ],
      reactLibs: [
        'react-dnd',
        'react-dnd-html5-backend',
        'react-dropzone',
        'react-konva',
        'react-pannellum',
        'react-pdf',
        'react-select',
        'react-sortable-hoc',
        'react-spring',
        'react-virtual',
        'react-virtualized',
        'react-yandex-maps',
        'react-zoom-pan-pinch'
      ],
      others: [
        '2gis-maps',
        'styled-components',
        'konva',
        'dayjs',
        'print-js',
        'notistack',
        'juice',
        'google-libphonenumber',
        'diff',
        'classnames',
        'array-move',
        '@date-io/dayjs',
        '@loadable/component'
      ]
    }
}