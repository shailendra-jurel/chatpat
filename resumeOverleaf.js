\documentclass[10pt, letterpaper]{article}

% Packages:
\usepackage[
    ignoreheadfoot, % set margins without considering header and footer
    top=0.5 cm, % seperation between body and page edge from the top
    bottom=0.1 cm, % seperation between body and page edge from the bottom
    left=1.5 cm, % seperation between body and page edge from the left
    right=1.5 cm, % seperation between body and page edge from the right
    footskip=1.0 cm, % seperation between body and footer
    % showframe % for debugging 
]{geometry} % for adjusting page geometry
\usepackage{titlesec} % for customizing section titles
\usepackage{tabularx} % for making tables with fixed width columns
\usepackage{array} % tabularx requires this
\usepackage[dvipsnames]{xcolor} % for coloring text
\definecolor{primaryColor}{RGB}{0, 0, 0} % define primary color
\usepackage{enumitem} % for customizing lists
\usepackage{fontawesome5} % for using icons
\usepackage{amsmath} % for math
\usepackage[
    pdftitle={Shailendra Jurel's CV},
    pdfauthor={Shailendra Jurel},
    pdfcreator={Shailendra Jurel},
    colorlinks=true,
    urlcolor=primaryColor
]{hyperref} % for links, metadata and bookmarks
\usepackage[pscoord]{eso-pic} % for floating text on the page
\usepackage{calc} % for calculating lengths
\usepackage{bookmark} % for bookmarks
\usepackage{lastpage} % for getting the total number of pages
\usepackage{changepage} % for one column entries (adjustwidth environment)
\usepackage{paracol} % for two and three column entries
\usepackage{ifthen} % for conditional statements
\usepackage{needspace} % for avoiding page brake right after the section title
\usepackage{iftex} % check if engine is pdflatex, xetex or luatex
\usepackage{enumitem} % Add this in your preamble

% Ensure that generate pdf is machine readable/ATS parsable:
\ifPDFTeX
    \input{glyphtounicode}
    \pdfgentounicode=1
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage{lmodern}
\fi

\usepackage{charter}

% Some settings:
\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt} % remove space before adjustwidth environment
\pagestyle{empty} % no header or footer
\setcounter{secnumdepth}{0} % no section numbering
\setlength{\parindent}{0pt} % no indentation
\setlength{\topskip}{0pt} % no top skip
\setlength{\columnsep}{0.10cm} % set column seperation
\pagenumbering{gobble} % no page numbering

\titleformat{\section}{\needspace{4\baselineskip}\bfseries\large}{}{0pt}{}[\vspace{1pt}\titlerule]

\titlespacing{\section}{
    % left space:
    -3pt
}{
    % top space:
    0.15 cm
}{
    % bottom space:
    0.25 cm
} % section title spacing

\renewcommand\labelitemi{$\vcenter{\hbox{\small$\bullet$}}$} % custom bullet points
\newenvironment{highlights}{
    \begin{itemize}[
        topsep=1.5 pt,
        parsep = 1.5 pt,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=0 cm + 10pt
    ]
}{
    \end{itemize}
} % new environment for highlights


\newenvironment{highlightsforbulletentries}{
    \begin{itemize}[
      topsep=1.5 pt,
        parsep = 1.5 pt,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=10pt
    ]
}{
    \end{itemize}
} % new environment for highlights for bullet entries

\newenvironment{onecolentry}{
    \begin{adjustwidth}{
        0 cm + 0.00001 cm
    }{
        0 cm + 0.00001 cm
    }
}{
    \end{adjustwidth}
} % new environment for one column entries

\newenvironment{twocolentry}[2][]{
    \onecolentry
    \def\secondColumn{#2}
    \setcolumnwidth{\fill, 4.5 cm}
    \begin{paracol}{2}
}{
    \switchcolumn \raggedleft \secondColumn
    \end{paracol}
    \endonecolentry
} % new environment for two column entries

\newenvironment{threecolentry}[3][]{
    \onecolentry
    \def\thirdColumn{#3}
    \setcolumnwidth{, \fill, 4.5 cm}
    \begin{paracol}{3}
    {\raggedright #2} \switchcolumn
}{
    \switchcolumn \raggedleft \thirdColumn
    \end{paracol}
    \endonecolentry
} % new environment for three column entries

\newenvironment{header}{
    \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.5}
}{
    \par\kern\topsep
} % new environment for the header

\newcommand{\placelastupdatedtext}{% \placetextbox{<horizontal pos>}{<vertical pos>}{<stuff>}
  \AddToShipoutPictureFG*{% Add <stuff> to current page foreground
    \put(
        \LenToUnit{\paperwidth-2 cm-0 cm+0.05cm},
        \LenToUnit{\paperheight-1.0 cm}
    ){\vtop{{\null}\makebox[0pt][c]{
        \small\color{gray}\textit{Last updated in September 2024}\hspace{\widthof{Last updated in September 2024}}
    }}}%
  }%
}%

% save the original href command in a new command:
\let\hrefWithoutArrow\href

\begin{document}
    \newcommand{\AND}{\unskip
        \cleaders\copy\ANDbox\hskip\wd\ANDbox
        \ignorespaces
    }
    \newsavebox\ANDbox
    \sbox\ANDbox{$|$}

    \begin{header}
        \fontsize{27 pt}{27 pt}\selectfont SHAILENDRA JUREL
    \vspace{-0.3 em}

        \normalsize
        % \mbox{Bengaluru India}%
        % \kern 5.0 pt%
        % \AND%
        \kern 3.0 pt%
        \mbox{\hrefWithoutArrow{mailto:shailendrajurel001.com}{shailendrajurel001.com}}%
        \kern 3.0 pt%
        \AND%
        % \kern 5.0 pt%
        % \mbox{\hrefWithoutArrow{tel:+91 6398846710}{+91 6398846710}}%
        % \kern 5.0 pt%
        % \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://shailendrajurel.vercel.app/}{shailendrajurel.vercel.app}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://www.linkedin.com/in/shailendra-jurel/}{linkedin.com/in/shailendra-jurel}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://github.com/shailendra-jurel}{github.com/shailendra-jurel}}%
    \end{header}

    % \vspace{3 pt - 0.3 cm}
    % \vspace{-1.5 em}

    
    % Skills Section
\section*{Skills}
\begin{itemize}[leftmargin=*, topsep=0pt, partopsep=0pt, itemsep = 0.2 pt]
    \item \textbf{Programming Languages:} Java, Python (Beginner), JavaScript
    \item \textbf{Web Development:} HTML, CSS, React/Vite,Tailwind CSS, Express.js, Node.js, Spring Boot 
    \item \textbf{Databases:} MySQL, MongoDB, SQLite, Schema Design
    \item \textbf{Tools \& Technologies:} Git, GitHub, Postman, Render, Appwrite, FireBase, Docker
    \item \textbf{Machine Learning:} Pandas, NumPy, Scikit-learn, Data Preprocessing, Regression, Classification, Model Training  
    \item \textbf{Other Skills:} Strong Problem Solving, Command Line Interface, Data Structures Algorithms
\end{itemize}
\vspace{-0.3em}
\vspace{3 pt}


         \section*{Experience}
         \vspace{-0.9em}

    \begin{itemize}[itemsep=0.1em, topsep=0pt, partopsep=0pt]
    
      \subsection{ SiteAssist (startup) :- }
               \vspace{-0.4em}


      
        \item \textbf{ Full-Stack Development } - Developed a scalable and high-performance system using the MERN stack, integrating PWA technologies to enhance user experience and app reliability.
                       \vspace{-0.4em}


        \item \textbf{API Integration} - : Engineered and secured over 15 API endpoints, facilitating seamless and efficient communication between the frontend and backend systems.

    \end{itemize}
  \section{Projects}



\textbf{Empowern} | 
     \vspace{2 pt }
\href{https://github.com/shailendra-jurel/EMPOWERN}{\textit{GitHub}} | 
\href{https://empowering-ashen.vercel.app/}{\textit{Live}} \\
 A platform connecting contractors with skilled workers for quick, cost-effective hiring and enabling workers to find nearby jobs, reducing unemployment and saving time. \\

\begin{itemize}[itemsep=0.1em, topsep=0.1em, partopsep=0pt]

    \item \textbf{Features}: Simplified job search, secure authentication (JWT, Google Authenticator), real-time notifications (Twilio), mobile-friendly UI, and improved job-matching efficiency.
                           \vspace{-0.4em}


    \item \textbf{Achievements}: Delivered a mobile-friendly, highly extensible platform with an intuitive UI/UX, robust security, and efficient job-matching, significantly reducing downtime for workers and enhancing user satisfaction
    
\end{itemize}
\textbf{Tech Stack }: React (Vite), Express.js, Firebase, Tailwind CSS, Redux, MongoDB, JWT Tokens, Twilio, Google APIs..

% Add a separator line
\noindent\rule{\textwidth}{0 pt}
    % \vspace{6 pt }
     \vspace{- 16 pt}

\textbf{Restuarant Reservation System Backend} (Backend) | 
\href{https://github.com/vivek-anand-singh/banking-system-backendproject}{\textit{GitHub}} \\
     \vspace{2 pt }

A backend system designed to manage restaurant reservations, customer interactions, and staff operations, built, built with Spring Boot and RESTful APIs. \\

\begin{itemize}[itemsep=0.1em, topsep=0.1em, partopsep=0pt]

    \item \textbf{Reservation Management}:Implements full CRUD operations for managing table reservations, including customer details, booking times, and reservation statuses.
                           \vspace{-0.4em}

    \item \textbf{Customer, Table, and Employee Management}:   Centralized system to manage customer reservations, table availability, and employee operations, ensuring seamless booking experiences, efficient table utilization, and streamlined task assignments. Robust API integration enables real-time updates and online reservations through client-facing applications.
   
\end{itemize}

\textbf{Tech Stack}: Java Spring Boot, MySQL.


% Add a separator line
\noindent\rule{\textwidth}{0.00 pt}

               \vspace{-0.5em}


\textbf{Work Tracker} | 
\href{https://github.com/shailendra-jurel/goWorkout}{\textit{GitHub}} | 
\href{https://go-workout.vercel.app/}{\textit{Live}} \\
A React based application for managing daily routines, fitness, and wellness, providing users with tools for task tracking, gym progress, food logs, and meditation guidance.
\begin{itemize}[itemsep=0.1em, topsep=0.1em, partopsep=0pt]
    \item \textbf{Feature-Rich Dashboard}: Includes task management, daily progress tracking, and curated guides for meditation and wellness.
                   \vspace{-0.4em}

    \item \textbf{Seamless Data Management and Intuitive UI/UX: }:  Combines local storage for quick access with a secure backend for historical data, featuring a responsive interface and dynamic state management using modern React hooks for a smooth user experience
                   \vspace{-0.4em}

    \item \textbf{Integration with Backend}:  Supports secure user authentication, data synchronization, and history tracking through Node.js, Express, and MongoDB.
\end{itemize}
\textbf{Tech Stack}:  React-vite, Tailwind CSS, JavaScript, Node, Express, MongoDB

\section{Education}
    % Scaler School of Technology
    \begin{twocolentry}{2023 – 2027}
        \textbf{Scaler School of Technology} \\
        Integrated B.S-M.S in Computer Science
    \end{twocolentry}
    
    \vspace{0.1cm}
    
    % BITS Pilani
    \begin{twocolentry}{2023 – 2026}
        \textbf{Birla Institute of Technology and Science (BITS Pilani)} \\
        Bachelor of Science in Computer Science
    \end{twocolentry}
    
               % \vspace{-0.2em}

      \section*{Achievements}
    \begin{itemize}[itemsep=0.1em, topsep=0pt, partopsep=0pt]
        % \item \textbf{Hacktoberfest Contributor} (2024) - Actively contributed to multiple open-source projects 
        % \item \textbf{Contributor in PyMc} - Submitted a pull request that was successfully merged.
        % \item \textbf{Contributor in Algonesis} - Added an algorithmic solution in C lanaguage to the Algonesis openSource platform.
               \vspace{-0.9em}

    
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://www.scaler.com/academy/profile/d225a0084192//}{scaler.com}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://leetcode.com/u/shailendrajurel001/}{leetcode.com/u/shailendrajurel001/}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://codeforces.com/profile/shailendrajurel001}{codeforces.com/profile/shailendrajurel001}}%
    \end{itemize}

\end{document}