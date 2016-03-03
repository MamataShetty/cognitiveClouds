import webapp2
from google.appengine.api import mail

class ContactPage(webapp2.RequestHandler):
    def post(self):
            sender_address = "pras@cognitiveclouds.com"
            to_address = "pras@cognitiveclouds.com;ben@cognitiveclouds.com;amit@cognitiveclouds.com"
            user_address = self.request.get("fm_email")
            user_name = self.request.get("fm_name")
            user_phone = self.request.get("fm_phone")
            subject = "Lead"
            body = self.request.get("fm_message")
            html_body = "Lead Name: "+user_name+"<br> Lead Email: "+user_address + "<br>Lead Phone: "+user_phone +"<br>Lead Message: "+ self.request.get("fm_message")
            mail.send_mail(sender_address, to_address, subject, body, html = html_body)
            self.redirect("/thank-you/")
class CasestudyPage(webapp2.RequestHandler):
    def post(self):
            sender_address = "pras@cognitiveclouds.com"
            to_address = "pras@cognitiveclouds.com;ben@cognitiveclouds.com;amit@cognitiveclouds.com"
            user_address = self.request.get("fm_email")
            user_name = self.request.get("fm_name")
            user_phone = self.request.get("fm_phone")
            subject = "Lead - Case study Downloaded"
            body = self.request.get("fm_message")
            html_body = "Lead Name: "+user_name+"<br> Lead Email: "+user_address + "<br>Lead Phone: "+user_phone +"<br>Lead Message: "+ self.request.get("fm_message")
            mail.send_mail(sender_address, to_address, subject, body, html = html_body)
            self.redirect("/case-study-download/")
app = webapp2.WSGIApplication([('/contactus', ContactPage),('/casesubmit',CasestudyPage)])
