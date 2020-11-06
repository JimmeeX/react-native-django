from django.test import SimpleTestCase


class TestUrls(SimpleTestCase):
    # def test_list_url_is_resolved(self):
    #     self.assertEquals(1, 2, msg="Some message?")

    def test_failed_case(self):
        self.assertEquals(1, 2, msg="Test failed case")

    def test_success_case(self):
        self.assertEquals(2, 2, msg="Test success case")
