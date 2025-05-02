import { ProjectsDataInterface } from '../types/projects-data.interface';

export const ProjectsData: ProjectsDataInterface[] = [
  {
    title: 'Notification System',
    image:
      '/assets/images/projects/notificationSystem/notificationSystem-main.png',
    arrayImg: [
      '/assets/images/projects/notificationSystem/gif.gif',
      '/assets/images/projects/notificationSystem/screenshot1.png',
      '/assets/images/projects/notificationSystem/screenshot2.png',
      '/assets/images/projects/notificationSystem/screenshot3.png',
    ],
    linkProject: 'https://github.com/chandraguptsharma1/notificationSystem',
    description:
      'An Android-based notification system integrated with Firebase Cloud Messaging (FCM) and Node.js APIs, enabling real-time push notifications, dynamic notification listing, and read/unread management.',
    tech: ['android', 'java', 'firebase', 'node.js', 'sql', 'angular'],
    stack: '/assets/images/icons/android-icon.svg',
    information:
      "<ul style='margin:0;padding-left:20px;'><li style='margin-bottom:5px;'><strong>Push Notification System:</strong><ul style='margin:0;padding-left:20px;'><li>Receive real-time notifications using Firebase Cloud Messaging.</li><li>Backend-triggered notifications using Node.js APIs.</li></ul></li><li style='margin-bottom:5px;'><strong>Notification Management:</strong><ul style='margin:0;padding-left:20px;'><li>Store and retrieve notifications from an SQL database.</li><li>Display notifications in-app with read/unread states.</li></ul></li><li style='margin-bottom:5px;'><strong>User Interface:</strong><ul style='margin:0;padding-left:20px;'><li>Material Design components with RecyclerView and CardView.</li><li>Grey out cards once notification is read.</li></ul></li><li style='margin-bottom:5px;'><strong>Notification Detail View:</strong><ul style='margin:0;padding-left:20px;'><li>Detailed screen showing full notification content upon click.</li></ul></li><li style='margin-bottom:5px;'><strong>Backend Integration:</strong><ul style='margin:0;padding-left:20px;'><li>Node.js API for sending and fetching notification data.</li><li>Secure API communication with Firebase Admin SDK.</li></ul></li></ul><p style='margin-top:10px;margin-bottom:5px;'><strong>Technologies</strong></p><ul style='margin:0;padding-left:20px;'><li style='margin-bottom:5px;'><strong>Android:</strong> Java and XML-based native Android development.</li><li style='margin-bottom:5px;'><strong>Firebase FCM:</strong> Push notification delivery system.</li><li style='margin-bottom:5px;'><strong>Node.js:</strong> Backend server for notification management.</li><li style='margin-bottom:5px;'><strong>SQL Database:</strong> Notification data storage and retrieval.</li><li style='margin-bottom:5px;'><strong>Material UI:</strong> Responsive and modern user interface components.</li></ul>",
  },
];
