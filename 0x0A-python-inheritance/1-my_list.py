#!/usr/bin/python3
"""Defines an inherited list class mylist."""

class Mylist(list):
    """Implemets sorted printing for the built-in list class-"""

    def print_sorted(self):
        """Print a list in sorted ascending order."""
        print (sorted(self))

