import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Newsletter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .content {
            margin-top: 20px;
        }
        .content p {
            color: #666;
            margin-bottom: 10px;
        }
        .content img {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .buttons {
            text-align: center;
            margin-top: 20px;
        }
        .buttons a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin: 0 5px;
            transition: background-color 0.3s ease;
        }
        .buttons a:hover {
            background-color: #0056b3;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            color: #999;
        }
        .social-links {
            margin-top: 20px;
            text-align: center;
        }
        .social-links a {
            color: #007bff;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
        }
        .social-links a:hover {
            color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Email Newsletter</h1>
        <div class="content">
            <p>{{paragraph}}</p>
            <p>Author: {{author}}</p>
            <div class="social-links">
                <p>Social Links:</p>
                {{#each socialLinks}}
                    <a href="{{this.url}}" target="_blank">{{this.name}}</a>
                {{/each}}
            </div>
            <img src="{{imageURL}}" alt="Image" />
            <div class="buttons">
                <a href="{{buttonLink}}" target="_blank">{{buttonName}}</a>
            </div>
        </div>
        <footer>
            &copy; 2024 Email Newsletter Platform
        </footer>
    </div>
</body>
</html>
`;

interface EmailBody {
    author: string;
    title: string;
    buttonURL: string;
    buttonContent: string;
    content: string;
    imageURL: string;
    socialLinks: { name: string; url: string }[];
}

interface RequestData {
    emails: string[];
    body: EmailBody;
}

function replaceTemplatePlaceholders(html: string, data: EmailBody): string {
    return html
        .replace('{{paragraph}}', data.content)
        .replace('{{author}}', data.author)
        .replace('{{imageURL}}', data.imageURL)
        .replace('{{buttonLink}}', data.buttonURL)
        .replace('{{buttonName}}', data.buttonContent)
        .replace('{{#each socialLinks}}', getSocialLinksHTML(data.socialLinks))
    }

function getSocialLinksHTML(socialLinks: { name: string; url: string }[]): string {
    return socialLinks.map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`).join('');
}

export async function POST(req: NextRequest) {
    try {
        const { emails, body }: RequestData = await req.json();

        if (!emails.length) {
            console.log('No subscribers found.');
            return NextResponse.json({ success: false, message: 'No subscribers to send emails', status: 200 });
        }

        const transporter: Transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "newsletter.platform@gmail.com",
                pass: "romrttcplqbaklky"
            }
        });

        const emailPromises = emails.map(email => {
            const mailOptions = {
                from: "newsletter.platform@gmail.com",
                to: email,
                subject: body.title,
                html: replaceTemplatePlaceholders(emailHTML, body),
            };

            return transporter.sendMail(mailOptions);
        });

        await Promise.all(emailPromises);

        return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error sending emails", error: error.message });
    }
}
